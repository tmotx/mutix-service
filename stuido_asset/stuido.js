
var CURRENT_INFO_BG_POINTER = 0;
var CURRENT_INFO_BG_ARR = [];
var INFO_TIMER = null;

function showInfo(action, display) {
  var serviceInfoTitle = document.getElementById('service_info_title');
  // var serviceInfoSubTitle = document.getElementById('service_info_subtitle');
  var serviceInfoTitleDesc = document.getElementById('service_info_title_desc');
 //  var serviceInfoText = document.getElementById('service_info_text');

  hoverInfo(action, display);
  
  var data = getInfo(action);
  if(data) {
    serviceInfoTitle.innerText = data.serviceInfoTitle;
    serviceInfoTitleDesc.innerHTML = data.serviceInfoTitleDesc;
    // serviceInfoSubTitle.innerHTML = data.serviceInfoSubTitle;
    /*
    clearChild(serviceInfoText);
    data.serviceInfoText.forEach(function(item){
      var temp = document.createElement('li');
      temp.textContent = item;
      serviceInfoText.appendChild(temp);
    });
    */
    CURRENT_INFO_BG_ARR = data.serviceInfoBG;
    CURRENT_INFO_BG_POINTER = 0;
    clearInterval(INFO_TIMER);
    setInfoBG(display);
    if (CURRENT_INFO_BG_ARR.length > 1) {
      INFO_TIMER = setInterval(function(){
        setInfoBG();
      }, 4000);
    }
  }
}

function setInfoBG(){
  var serviceInfoMain = document.getElementById('service_info_main_bg');
  serviceInfoMain.style.opacity = .001;
  setTimeout(function(){
    serviceInfoMain.style.backgroundImage = "url('./images/" + CURRENT_INFO_BG_ARR[CURRENT_INFO_BG_POINTER] + "')";
    CURRENT_INFO_BG_POINTER ++;
    if (CURRENT_INFO_BG_POINTER >= CURRENT_INFO_BG_ARR.length) {
      CURRENT_INFO_BG_POINTER = 0
    }
    serviceInfoMain.style.opacity = 1;
  }, 1000);
}

function hoverInfo(action, display) {
  var menu = ['TRANSLATE', 'LIVESTREAM', 'TRANSCRIPT', 'PACKAGE', 'INTERNET']
  menu.forEach(function(item){

    var tar = null;
    
    if (display === 'mobile') {
      tar = document.getElementById('service_icon_' + item + '_mobile');
    } else {
      tar = document.getElementById('service_icon_' + item);
    }
    
    
    if (action === item) {
      tar.classList.add("service_icon_hover");
    } else {
      if (tar.classList.contains('service_icon_hover')) {
        tar.classList.remove('service_icon_hover');
      }
    }
  });
}

function getInfo(action) {
  switch (action) {
    case 'TRANSLATE':
      return {
        serviceInfoTitle: '同步口譯服務',
        serviceInfoSubTitle: '服務內容',
        serviceInfoTitleDesc: '提供 auXala 同步口譯服務，並可代為安排英日語口譯員。',
        serviceInfoText: ['中(英/日)雙語，獨立雙頻道', '專業口譯台 + 耳機麥克風（同時可由 2 位口譯員輪替）', '現場會眾最大收聽數 100 台'],
        serviceInfoBG: ['translation01.jpg', 'translation02.jpg']
      }
    case 'LIVESTREAM':
      return {
        serviceInfoTitle: '專業直播服務',
        serviceInfoSubTitle: '服務內容',
        serviceInfoTitleDesc: '提供專業 OBS 專業直播服務，並可代為安排錄影及音控團隊。',
        serviceInfoText: ['簡報 + 攝影機 720p 字母畫面（現場需提供 HDMI 簡報訊號）', '提供 YouTube / Facebook / RTMP 最多同時兩個頻道', '加贈 USB 隨身碟（內含 1080p 錄影檔）'],
        serviceInfoBG: ['Live01.jpg', 'Live02.jpg']
      }
    case 'TRANSCRIPT':
      return {
        serviceInfoTitle: '即時字幕／逐字稿服務',
        serviceInfoSubTitle: '服務內容',
        serviceInfoTitleDesc: '提供 UDTalk 即時字幕服務，適合紀錄逐字稿。',
        serviceInfoText: ['現場語音錄音，並即時語音辨識轉為文字／字幕（需現場配合）'],
        serviceInfoBG: ['Transcript.jpg']
      }
    case 'PACKAGE':
      return {
        serviceInfoTitle: '活動統包服務',
        serviceInfoSubTitle: '服務流程',
        serviceInfoTitleDesc: '協助舉辦於 Cymking Space 的各式活動，包括講座／發表會／工作坊等各式活動，從企劃到執行與宣傳的統包式服務。',
        serviceInfoText: [
          '1. 面談確認客戶需求（時間、預算、人數、活動目的等）',
          '2. 活動內容企劃，包括策略規劃、創意發想',
          '3. 向客戶提案並修改企劃',
          '4. 雙方確認本次活動執行方向',
          '5. 確認後，開始執行並協力宣傳（線下／線上）',
          '6. 活動後結案'
        ],
        serviceInfoBG: ['activity01.jpg', 'activity02.jpg']
      }
    case 'INTERNET':
      return {
        serviceInfoTitle: '會場網路服務',
        serviceInfoSubTitle: '服務內容',
        serviceInfoTitleDesc: '提供 Ruckus 高密度無線網路服務，並可代為申請對外頻寬。',
        serviceInfoText: ['現場會眾最大連線數 500 台且最多 1 個會議空間', '有線及無線網路，單一設備最快 1Gbps', '協助申請 中華電信 臨時網路'],
        serviceInfoBG: ['network_03.jpg']
      }
    default:
      return false
  }
}

var CURRENT_PRICE_INFO = 0;
var PRICE_INFO_ARR = [
  {
    title: '專業直播',
    price: '12,000',
    items: [
      '同步 720p 直播兩個平台',
      '單機固定鏡位'
    ],
    itemPlus: [
      '講者與簡報子母畫面',
      '雙機多鏡位運鏡',
      '同步 1080p 錄影',
      '同步多語言直播',
      '影片後製剪輯'
    ]
  },
  {
    title: '同步口譯',
    price: '12,000',
    items: [
      '最多 100 位聽眾',
      '1 個頻道可由 2 位口譯員雙語切換'
    ],
    itemPlus: [
      '最多 4 種頻道同步 4 種語言',
      '最多 1000 位聽眾',
      '同步多語言錄音'
    ]
  },
  {
    title: '會場網路',
    price: '12,000',
    items: [
      '最大 500Mb ps 對外頻寬',
      'WiFi 最大連線數 100 個裝置',
      'WiFi 最大涵蓋範圍 300 坪單一會議廳'
    ],
    itemPlus: [
      '最大 2Gbps 對外頻寬',
      'WiFi 最大連線數 1000 個裝置',
      '最多 10 個有線網路 RJ45 接口',
      '最多 4 個會議廳'
    ]
  }
];
function showPriceMobile(action) {
  if (action === 'L') {
    if (CURRENT_PRICE_INFO > 0) {
      CURRENT_PRICE_INFO --;
      showPriceInfo();
    }
  } else if (action === 'R') {
    if (CURRENT_PRICE_INFO < PRICE_INFO_ARR.length -1) {
      CURRENT_PRICE_INFO ++;
      showPriceInfo();
    }
  }
  btnCheck(CURRENT_PRICE_INFO);
}

function btnCheck(val) {
  var lBtn = document.getElementById("price_info_mobile_btn_L");
  var rBtn = document.getElementById("price_info_mobile_btn_R");
  
  if (getWindowWidth() > 1025) {
    lBtn.style.display = 'none';
    rBtn.style.display = 'none';
  } else {
    if (val < 1) {
      lBtn.style.display = 'none';
    } else {
      rBtn.style.display = 'block';
      lBtn.style.display = 'block';
    }
    if (val >= PRICE_INFO_ARR.length -1) {
      rBtn.style.display = 'none';
    } else {
      rBtn.style.display = 'block';
    }
  }
}

function showPriceInfo() {
  var title = document.getElementById("price_info_mobile_title");
  var price = document.getElementById("price_info_mobile_price");
  var items = document.getElementById("price_info_mobile_item");
  var itemPlus = document.getElementById("price_info_mobile_item_plus");

  title.innerText = PRICE_INFO_ARR[CURRENT_PRICE_INFO].title;
  price.innerText = PRICE_INFO_ARR[CURRENT_PRICE_INFO].price;
  clearChild(items);
  PRICE_INFO_ARR[CURRENT_PRICE_INFO].items.forEach(function(item){
    var temp = document.createElement('li');
    temp.textContent = item;
    items.appendChild(temp);
  });
  clearChild(itemPlus);
  PRICE_INFO_ARR[CURRENT_PRICE_INFO].itemPlus.forEach(function(item){
    var temp = document.createElement('li');
    temp.textContent = item;
    itemPlus.appendChild(temp);
  });
}

function clearChild(tar) {
  while (tar.firstChild) {
    tar.removeChild(tar.firstChild);
  }
}

function resizeEvent () {
}

function resetMainIMG (types, size) {
  var mainIMG = document.getElementById(types + '_MAIN_IMG');
  var srcString = mainIMG.getAttribute('src');
  srcString = srcString.substring(0, srcString.length - 5);
  mainIMG.setAttribute('src', srcString + size + '.jpg')
}

function getWindowHeight() {
  return  window.innerHeight;
}

function getWindowWidth() {
  return  window.innerWidth;
}

resizeEvent ();

