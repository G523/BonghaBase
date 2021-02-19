// contentscript.js
function memo(){
    chrome.storage.local.get(['memo'], function (items) {
        Array.from(items.memo.split('\n')).forEach(function(entry) {
            var memoa = entry.split('-');
            Array.from(document.getElementsByClassName('muted')).forEach(function(muteds) {
                if(muteds.innerHTML == memoa[0]){
                    muteds.innerHTML = memoa[0]+'<a class="usermemo" style="color:gray;"> - '+memoa[1]+'</a>';
                }
            });
        });
    });  
}
function ad(){
    chrome.storage.local.get(['ad'], function (items) {
        if (items.ad == "0" && document.getElementById('nofiBox').innerHTML != '') {
            document.getElementById('topNoticeLine').innerHTML = `<a href="/nofi" class="label">알림</a> <a onclick="location.href='/nofi'" style="color:white">`+document.getElementsByClassName('nofiText')[0].innerHTML+`</a>`;
            document.getElementById('nofiBox').style.display = 'none';
        }else if (items.ad == "0" && document.getElementById('nofiBox').innerHTML == '') {
            document.getElementById('topNoticeLine').style.display = 'none';
        }
    });
}
function arca(){
    chrome.storage.local.get(['arca'], function (items) {
        if (items.arca == "0") {
            document.getElementsByClassName('nav')[0].style.background = '#373A3C';
            document.getElementsByClassName('label')[0].style.background = '#3D414D';
            document.getElementsByClassName('button')[0].style.background = '#373A3C';
            document.getElementById('topNoticeLine').style.background = '#646771';
            document.getElementsByTagName('body')[0].style = ` font-family:-apple-system,BlinkMacSystemFont,NanumBarunGothic,NanumGothic,system-ui,sans-serif;`;
        }
    });
}
function bb(){
    chrome.storage.local.get(['bb'], function (items) {
        Array.from(items.bb.split('\n')).forEach(function(entry) {
            var count = 1;
            Array.from(document.getElementsByClassName('little right')).forEach(function(lrs) {
                if(lrs.innerHTML == entry){
                    document.getElementsByTagName('tr')[count].style.display="none";
                }
                count = count + 1;
            });
        });
    });  
}
ad();
memo();
arca();
bb();