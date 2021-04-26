'use strict';

let imgArr = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];


const imagesSec = document.getElementById('imagesSec');
const leftImage = document.getElementById('leftImage');
const middleImage = document.getElementById('middleImage');
const rightImage = document.getElementById('rightImage');


let voteNum =0;
let leftImageIndex = 0;
let rightImageIndex = 0;
let middleImageIndex =0;
let attempt =25;

function Images(name){
  this.name = name.split('.')[0];
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
   
let leftIndex=randomImage(0, imgArr.length - 1);
let middleIndex;
let rightIndex;

do{
  rightIndex=randomImage(0, imgArr.length - 1);
  middleIndex=randomImage(0, imgArr.length - 1);
} while(leftIndex===rightIndex || leftIndex===middleIndex || rightIndex===middleIndex);

leftImage.src = Images.all[leftIndex].img;
rightImage.src = Images.all[rightIndex].img;
middleImage.src = Images.all[middleIndex].img;


leftImageIndex=leftIndex;
rightImageIndex=rightIndex;
middleImageIndex=middleIndex;

Images.all[leftIndex].shown++;
Images.all[middleIndex].shown++;
Images.all[rightIndex].shown++;
}





function clicker(event){
    
 
   if( (event.target.id == 'leftImage'|| event.target.id == 'rightImage'|| event.target.id=='middleImage')&& voteNum<attempt){
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

const viewResult = document.getElementById('viewResult');
const resultsContainer = document.getElementById('list');

function viewResultFunction(event){
  let ulElement = document.createElement('ul');
   resultsContainer.appendChild(ulElement);

  for (let i =0 ; i<Images.all.length; i++){
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent= `${Images.all[i].name}had a ${Images.all[i].votes} votes , and was seen a  ${Images.all[i].shown}.`
  }
  viewResult.removeEventListener('click', viewResultFunction);
}

viewResult.addEventListener('click', viewResultFunction);

imagesSec.addEventListener('click', clicker);
renderImages();