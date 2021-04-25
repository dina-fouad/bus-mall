'use strict';

let imgArr = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];


const imagesSec = document.getElementById('imagesSec');
const leftImage = document.getElementById('leftImage');
const middleImage = document.getElementById('middleImage');
const rightImage = document.getElementById('rightImage');

let voteNum =0;
let leftImageIndex = 0;
let rightImageIndex = 0;
let middleImageIndex =0;


function Images(name){
  this.name = name;
  this.img =`./img/${name}`;
   this.shown=0;
   this.votes=0;


  Images.all.push(this);
}



Images.all=[];


for(let i=0 ; i< imgArr.length;i++){
 new Images(imgArr[i]);
}

function renderImages(){
    let rightIndex=randomImage(0, imgArr.length - 1);
    let middleIndex;
    let leftIndex;
    do{
    middleIndex=randomImage(0, imgArr.length - 1);
    }
    while(rightIndex===middleIndex);
     do{ leftIndex=randomImage(0, imgArr.length - 1);
     }
     while(leftIndex ===rightIndex||leftIndex===middleIndex);


leftImage.src = Images.all[leftIndex].img;
rightImage.src = Images.all[rightIndex].img;
middleImage.src = Images.all[middleIndex].img;


leftImageIndex=leftIndex;
rightImageIndex=rightIndex;
middleImageIndex=middleIndex;

Image.all[leftIndex].shown++;
Image.all[middleIndex].shown++;
Image.all[rightIndex].shown++;
}





function clicker(event){
    
 
   if( (event.target.id == 'leftImage'|| event.target.id == 'rightImage'|| event.target.id=='middleImage')&& voteNum<25){
     if (event.target.id ==='leftImage'){
         Images.all[leftImageIndex].votes++;
     }
      
     if (event.target.id ==='rightImage'){
        Images.all[rightImageIndex].votes++;
    }

    if (event.target.id ==='middleImage'){
        Images.all[middleImageIndex].votes++;
    }
      voteNum++;
    renderImages();
  }  else{
      console.log(Images.all);
  }
}


function randomImage(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

imagesSec.addEventListener('click', clicker);
renderImages();