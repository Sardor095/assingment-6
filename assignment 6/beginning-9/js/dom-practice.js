/*eslint-env browser*/

//STEP 1
// function show() {
//     alert('I have been clicked');
// }
//STEP 2
// window.onload = function() {
//     var sar = document.getElementById('sarik');
//     sar.addEventListener("click", myFunc);

//     function myFunc() {
//         alert("I have been clicked");
//     }
// }
//STEP 3
// var sardor = document.getElementById('demo');
// sardor.addEventListener('click', sar => {
//     alert('hello ');
// });


//STEP 4
// function next() {
//     alert('i have been clicked');
// }
// var btn = document.getElementById('demo1');
// btn.addEventListener('click', next);
//STEP 5

//STEP 6
// const direct = document.getElementById("redirect");

// direct.addEventListener('click', e => {
//     e.preventDefault();
//     alert('you clicked on a link');
// });
//STEP 7
// var myInput = document.getElementById('btn7');
// var btn2 = document.getElementById('num7');

// btn2.addEventListener('click', s => {
//     btn2.disabled = true;
//     alert('myInput.value');
// })
//STEP 8
// document.getElementById('demo8').addEventListener("click", e => {
//     window.open('newpage.html', 'NewPage', "width=300px; height=300px")
// });
//STEP 9

// var start = document.getElementById("start");
// var stop = document.getElementById("stop");

// start.addEventListener ('click', e => {
//     const timer = setInterval(() => {
//         console.log('Learning javascript is not fun');
//         stop.addEventListener('click', e => {
//             const stopTimer = clearInterval(timer);
//         });
//     }, 2000);
// });

//STEP 10

// var last = (id => {
//     return document.getElementById(id);
// });

// last('step10').addEventListener('click', () => {
//     var pick =  last('drop').value;
//     alert(pick);
// });