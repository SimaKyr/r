var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var isEdge = window.navigator.userAgent.indexOf("Edge") > -1;
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isExplorer= typeof document !== 'undefined' && !!document.documentMode && !isEdge;
var isUCMobile = navigator.userAgent.indexOf(' UCBrowser/') >= 0;

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

var tm = {
chrome:'https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo',
firefox:'https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/',
edge:'https://www.microsoft.com/store/apps/9NBLGGH5162S',
safari:'https://safari-extensions.apple.com/details/?id=net.tampermonkey.safari-G3XV72R5TC',
opera:'https://addons.opera.com/en/extensions/details/tampermonkey-beta/',
dolphin:'https://play.google.com/store/apps/details?id=net.tampermonkey.dolphin',
ucmobile:'https://play.google.com/store/apps/details?id=net.tampermonkey.uc',
explorer:'https://www.microsoft.com/uk-ua/windows/microsoft-edge'
};
if(isExplorer){alert('Use Edge or other browser!');throw new Error("Something went badly wrong!");}

function r(b){window.location.href = tm[b];}

if(isChrome&&isFirefox&&isEdge&&isOpera&&isSafari&&isExplorer&&isUCMobile){alert('Use normal browser!');
var i = document.createElement('button');
i.innerText = 'I use Dolphin on Android';
i.onclick = function(){window.location.href ='https://play.google.com/store/apps/details?id=net.tampermonkey.dolphin';}
document.body.appendChild(i);
}else{
if(detectmob){alert('Use Firefox, UC browser or Dolphin');}else{if(isChrome){r('chrome');}}
if(isFirefox){r('firefox');}
if(detectmob){alert('Use Firefox, UC browser or Dolphin');}else{if(isEdge){r('edge');}}
if(detectmob){alert('Use Firefox, UC browser or Dolphin');}else{if(isOpera){r('opera');}}
if(detectmob){alert('Use Firefox, UC browser or Dolphin');}else{if(isSafari){r('safari');}}
if(detectmob){alert('Use Firefox, UC browser or Dolphin');}else{if(isExplorer){r('explorer');}}
if(isUCMobile){r('ucmobile');}
}
