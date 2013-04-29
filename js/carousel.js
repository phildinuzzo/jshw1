
// var photos = document.getElementById('photodiv');
// photos.style.marginLeft = 0;


// function scroller() {
//   var start = parseInt(photos.style.marginLeft, 10);
//   var finish = start - 350;
//   var timer;
//   function animate() {
//     photos.style.marginLeft = (parseInt(photos.style.marginLeft, 10) - 2) + 'px';
//     x = parseInt(photos.style.marginLeft, 10);

//     console.log(x, finish);
//     if (x < finish) {
//       clearInterval(timer);
//     }
//   }
//   timer = setInterval(animate, 5);

//   console.log(start);
// }

// function scroller2() {
//   var start = parseInt(photos.style.marginLeft, 10);
//   var finish = start + 350;
//   var timer;
//   function animate() {
//     photos.style.marginLeft = (parseInt(photos.style.marginLeft, 10) + 2) + 'px';
//     x = parseInt(photos.style.marginLeft, 10);

//     console.log(x, finish);
//     if (x > finish) {
//       clearInterval(timer);
//     }
//   }
//   timer = setInterval(animate, 5);

//   console.log(start);
// }

// var next = document.getElementById('next');
// next.onclick = function() {
//   scroller();
// };

// var back = document.getElementById('back');
// back.onclick = function() {
//   scroller2();
// };


var image = document.getElementById('image');
var imgList = document.getElementsByTagName('img');
var imgArray = [];
var tracker;
var timer;

for (i = 0; i < imgList.length; i+=1) {
        imgArray.push(imgList[i].src);
}

function next() {
        image.style.opacity = 0;
        for( i = 0; i < imgArray.length; i += 1) {
                if(image.src === imgArray[i]) {
                        if (image.src === imgArray[imgArray.length - 1]) {
                                tracker = imgArray[0];
                        } else {
                        tracker = imgArray[i + 1];
                        }
                }
        }
        return (image.src = tracker);
}


// var img = document.getElementById("kitty");
// img.style.left = "10px";
// l = parseInt(img.style.left, 10);     // l = 10

// var start = document.getElementById("start");
// var faster = document.getElementById("faster");
// var slower = document.getElementById("slower");
// var stop = document.getElementById("stop");
// var myInterval;
// var speed = 0

// function changeSpeed(speed) {
//   // console.log('function called');
//   clearInterval(myInterval);
//   myInterval = setInterval(function(){
//     img.style.left = (l += speed) + "px";
//   }, 20);
// }



// left.onclick = function ()
// right.onclick = function ()


// start.onclick = function() { timer = setInterval(walkingKitty, 20); };

// stop.onclick = function() { clearInterval(timer); };


// faster.onclick = function() { timer = setInterval(fasterKitty, 20); };

// slower.onclick = function() { timer = setInterval(slowKitty, 20); };


// function walkingKitty() {
//   img.style.left = (l += 1) + "px";
// }

// function fasterKitty() {
//   clearInterval(timer); 
//   img.style.left = (l += 2) + "px";
// }

// function slowKitty() {
//   img.style.left = (l -= 0.5) + "px";
// }





// var timer = setInterval(walkingKitty, 20);



// Attempt at moving backwards ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var img = document.getElementById("kitty");

// img.style.left = "10px";
// l = parseInt(img.style.left, 10);

// function walkingKitty(){
//   if (parseInt(img.style.left,10) < 100) {
//     img.style.left = (l += 1) + "px";
//   } else {
//     img.style.left = (l -= 1) + "px";
//   }
// }

// var timer = setInterval(walkingKitty, 20);
// var stopMoving = function(){
//   clearInterval(timer);
// };
// setTimeout(stopMoving, 8000);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Basic working code:    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var img = document.getElementById("kitty");

// img.style.left = "10px";
// l = parseInt(img.style.left, 10);

// function walkingKitty(){
//     img.style.left = (l += 1) + "px";
// }

// var timer = setInterval(walkingKitty, 20);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// EX //
// var img = document.getElementById('image_id');

// img.style.opacity = 1;

// function fadeOut(){
//      if(img.style.opacity <= 0) {
//           return;
//      }
// img.style.opacity -= 0.01;
// }

// var timer = setInterval(fadeOut, 10);

