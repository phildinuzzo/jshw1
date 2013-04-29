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

var forward = document.getElementById('next');
forward.onclick = function() {
  next();
};

var back = document.getElementById('back');
back.onclick = function() {
  next();
};