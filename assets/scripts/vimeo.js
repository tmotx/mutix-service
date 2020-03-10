let playing = false;
const stop = document.getElementById("vimeo-stop");

const iframe = document.getElementById("vimeo-iframe");
const player = new Vimeo.Player(iframe);

player.ready().then(() => {
  player.setVolume(0);
});

document.addEventListener("scroll", () => {
  const windowHeight = window.screen.height;
  const iframeTop = iframe.getBoundingClientRect().top;
  const stopTop = stop.getBoundingClientRect().top;

  const overIframe = iframeTop < windowHeight - 100;
  const overStop = stopTop < 150;

  const shouldPlay = overIframe && !overStop;

  if (shouldPlay === playing) return;

  playing = shouldPlay;

  if (shouldPlay) {
    player.play();
  } else {
    player.pause();
  }
});
