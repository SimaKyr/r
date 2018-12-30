var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var isEdge = window.navigator.userAgent.indexOf("Edge") > -1;
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isExplorer= typeof document !== 'undefined' && !!document.documentMode && !isEdge;
var isUCMobile = navigator.userAgent.indexOf(' UCBrowser/') >= 0;

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
var ki = document.getElementsByTagName('body')[0];
ki.appendChild(i);
}else{
if(isChrome){r(chrome);}
if(isFirefox){r(firefox);}
if(isEdge){r(edge);}
if(isOpera){r(opera);}
if(isSafari){r(safari);}
if(isExplorer){r(chrome);}
if(isUCMobile){r(ucmobile);}
}
