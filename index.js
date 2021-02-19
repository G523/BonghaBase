//index.js
function randomItem(a) { //랜덤 문구 표시 부분
    return a[Math.floor(Math.random() * a.length)];
}
var mungu = ['노무현은 살아있다','주식은 자본투자가 아니다.','공산당이 역사상 가장 많은 사람을 죽였다!','위화감 조성은 컷이다','제국주의 국가들이 아니라 형제 국가들이었다면 조금의 식량만 원조해줬으면 되는 문제였어','솔직히 전향하려면 파시즘하지 리버럴, 신자유주의는 진짜 쳐다도 보기가 싫다','공산주의자는 마르크스와 레닌을 읽은 사람들이고, 반공주의자들은 마르크스와 레닌을 이해한 사람들이다.','집값 문제는 전면국유화 및 무상분배 아닌 이상 해결 불가능함.'] //랜덤 출력 문구
document.getElementById('alive').innerHTML = randomItem(mungu);

//저장값 불러오는 부분
chrome.storage.local.get(['ad'], function (items) {
    if (items.ad == "0") {
        document.getElementById("ad").checked = 'checked';
    }
});chrome.storage.local.get(['arca'], function (items) {
    if (items.arca == "0") {
        document.getElementById("arca").checked = 'checked';
    }
});
chrome.storage.local.get(['memo'], function (items) {
    document.getElementById("memot").innerHTML = items.memo;
});
chrome.storage.local.get(['bb'], function (items) {
    document.getElementById("bbt").innerHTML = items.bb;
});

//값 변경 이벤트 처리 부분
document.getElementById("ad").onclick = function () {
    if(document.getElementById("ad").checked){
        document.getElementById('adc').style.display = '';
        chrome.storage.local.set({'ad': 0});
    }else{
        document.getElementById('adc').style.display = 'none';
        chrome.storage.local.set({'ad': 1});
    }
};
document.getElementById("arca").onclick = function () {
    if(document.getElementById("arca").checked){
        document.getElementById('arcac').style.display = '';
        chrome.storage.local.set({'arca': 0});
    }else{
        document.getElementById('arcac').style.display = 'none';
        chrome.storage.local.set({'arca': 1});
    }
};
document.getElementById("memo").onclick = function () {
    if(document.getElementById("memo").checked){
        document.getElementById('memoc').style.display = '';
    }else{
        document.getElementById('memoc').style.display = 'none';
    }
};
document.getElementById("memob").onclick = function () {
    chrome.storage.local.set({'memo': document.getElementById("memot").value});
};
document.getElementById("bb").onclick = function () {
    if(document.getElementById("bb").checked){
        document.getElementById('bbc').style.display = '';
    }else{
        document.getElementById('bbc').style.display = 'none';
    }
};
document.getElementById("bbb").onclick = function () {
    chrome.storage.local.set({'bb': document.getElementById("bbt").value});
};