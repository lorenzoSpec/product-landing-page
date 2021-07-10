const RIGHT = document.querySelector('.r');
const LEFT = document.querySelector('.l');

const PEOPLE = [
  ['img/usopp.jpg', 'Toy Usopp', 'id-1'],
  ['img/pokemon.jpg', 'Toy Pokemon', 'id-2'], 
  ['img/saiyan.jpg', 'Toy Saiyan', 'id-3']
];
let imgCounter = 0;

/* Appending the Element to the DOM */
function whatToShow(indx, delVisual){
  const INDIVIDUAL = document.getElementById('individual');
  visual(indx, delVisual);

  INDIVIDUAL.removeChild(INDIVIDUAL.firstChild);
  INDIVIDUAL.insertBefore(createProof(PEOPLE[indx][0], PEOPLE[indx][1]), INDIVIDUAL.firstChild);
}

/* those dotted visualizer on bottom of proof */
function visual(indx, delVisual){
  const VISUALIZER = document.getElementById(PEOPLE[indx][2]);
  let prevProofDel;

  if(delVisual === 'none'){
    console.log(delVisual);
  } else if(delVisual === 'next') {
    if(indx === 0){
      prevProofDel = document.getElementById(PEOPLE[PEOPLE.length - 1][2]);
      prevProofDel.style.backgroundColor = '#eee';
    } else if(indx !== 0){
      prevProofDel = document.getElementById(PEOPLE[indx - 1][2]);
      prevProofDel.style.backgroundColor = '#eee';
    }
  } else if(delVisual === 'prev') {
    if(indx === PEOPLE.length - 1 ){
      prevProofDel = document.getElementById(PEOPLE[0][2]);
      prevProofDel.style.backgroundColor = '#eee';
    } else if(indx !== PEOPLE.length - 1){
      prevProofDel = document.getElementById(PEOPLE[indx + 1][2]);
      prevProofDel.style.backgroundColor = '#eee';
    }
  }

  VISUALIZER.style.backgroundColor = '#36498F';
}

/* creatiing proof element with picture and text */
function createProof(srcData, altData){
  const PICDIV = document.createElement('div');
  const IMG = document.createElement('img');
  const P = document.createElement('p');

  const PTEXT = document.createTextNode(`Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Ea molestias voluptatibus
                                        corrupti provident soluta laboriosam 
                                        ut nihil consequatur.`);

  PICDIV.setAttribute('id', 'pp-pic-div');
  IMG.setAttribute('src', srcData);
  IMG.setAttribute('alt', altData);

  PICDIV.appendChild(IMG);
  PICDIV.appendChild(P);
  P.appendChild(PTEXT);

  return PICDIV;
}

/* if next button was clicked show the next proof */
function nextProof(){
  imgCounter = imgCounter + 1;
  if(imgCounter > PEOPLE.length - 1){
    imgCounter = 0;
    whatToShow(imgCounter, 'next');
  } else if(imgCounter >= 0) {
    whatToShow(imgCounter, 'next');
  }
}

/* if the prev button button was clicked show the prev proof */
function prevProof(){
  imgCounter = imgCounter - 1;
  if(imgCounter < 0){
    imgCounter = PEOPLE.length - 1;
    whatToShow(imgCounter, 'prev');
  } else if(imgCounter >= 0) {
    whatToShow(imgCounter, 'prev');
  }
}

window.addEventListener('load', function(){whatToShow(imgCounter, 'prev')});
RIGHT.addEventListener('click', nextProof);
LEFT.addEventListener('click', prevProof);