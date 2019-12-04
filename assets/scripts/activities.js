const MUTIX_URI = "https://mutix.co.in";
const slashieId = "uSLS07pETSBEyo6GoSDPcnEh1iV";

const carousel = document.getElementById("carousel");
let activities;

const width = 240;
const gap = 20;
let total = 0;
let activeCount = undefined;
let first = 0;

function mod(number, m) {
  return ((number % m) + m) % m;
}

function updateActiveCount() {
  activeCount = Math.floor(carousel.offsetWidth / width);
};

function getPosition(index) {
  const shift = mod(index - first, total);

  if (shift === total - 1) return -1;
  if (shift === total - 2) return -2;
  if (shift > activeCount) return activeCount + 1;

  return shift;
};

function getStyle(position) {
  const translateX = position * (width + gap);

  let opacity = 0;
  let pointerEvents = "none";

  if (position === -1 || position === activeCount) opacity = 0.3;
  if (position >= 0 && position < activeCount) {
    opacity = 1;
    pointerEvents = "initial";
  }

  return `opacity: ${opacity}; transform: translate(${translateX}px, 0); pointer-events: ${pointerEvents}`;
};

function updateActivitiesLayout() {
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    activity.style = getStyle(getPosition(i));
  }
}

function initialize(data) {
  const dataWithCover = data.filter(({ cover }) => cover);
  const count = Math.ceil(8 / dataWithCover.length);

  let nodes = [];
  for (let i = 0; i < count; i++) {
    nodes = nodes.concat(dataWithCover);
  }

  const htmlArray = nodes.map(({ id, cover: { uri }, cluster }) => `
    <div class="activity bg-blue">
      <a class="activity-main" href="${MUTIX_URI}/p/${id}" target="mutix">
        <img src="${uri}" alt="" />
      </a>
      <div class="activity-line">
        <span class="space"></span>
        <a href="${MUTIX_URI}/${cluster.id}" target="mutix">${cluster.label}</a>
      </div>
    </div>
  `);

  carousel.insertAdjacentHTML("afterbegin", htmlArray.join(""));

  activities = carousel.getElementsByClassName("activity");
  total = activities.length;
}

let request = new XMLHttpRequest();
request.open("POST", `${MUTIX_URI}/graphql`, true);
request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    const res = JSON.parse(this.response);
    const posts = res.data.posts.nodes;

    initialize(posts);
    updateActiveCount();
    updateActivitiesLayout();

    carousel.addEventListener("click", ({ target }) => {
      if (!target.classList.contains("arrow")) return;
      const direction = target.classList.contains("arrow-right") ? 1 : -1;
      first = first + direction;
      updateActivitiesLayout();
    });
  }
};

request.send(
  JSON.stringify({
    variables: { slashieId },
    query:
      "query ($slashieId: GlobalID) { posts(slashieId: $slashieId) { nodes { ...PostSummary } } } fragment PostSummary on Post { id cover { ...Media } cluster { ...Cluster } } fragment Media on Media { uri } fragment Cluster on Cluster { id label }",
  }),
);
