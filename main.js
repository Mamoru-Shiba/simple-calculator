console.log('Hello World!');

document.addEventListener("DOMContentLoaded", function(){
    console.log("イベント発生");
    var button = document.getElementsByClassName('event-test');
    var input = document.getElementsByClassId('input-test');
    button.addEventListener("click", function(){
        console.log("ボタンが押されました");
        console.log(button);
        console.log(input);
    })
});