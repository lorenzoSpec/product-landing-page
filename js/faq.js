const EXPAND = document.querySelectorAll('.expand');

function faqAnswer(cont){
  createAnswer(cont);
}

function createAnswer(cont){
  let container = cont.parentNode.parentNode;
  let qDiv = cont.parentNode;

  const DIV = document.createElement('div');
  const P = document.createElement('p');

  DIV.setAttribute('class', 'answer-div');

  const pText = document.createTextNode(`Lorem ipsum, dolor sit amet 
                                        consectetur adipisicing elit. 
                                        Eius debitis ex sequi distinctio 
                                        tempora minima! Reiciendis 
                                        odit accusamus maiores temporibus
                                        officiis! Eveniet itaque eligendi
                                        quod voluptatem, labore aliquam 
                                        voluptates blanditiis. Lorem ipsum, 
                                        dolor sit amet consectetur adipisicing 
                                        elit. Eius debitis ex sequi distinctio 
                                        tempora minima! Reiciendis odit accusamus 
                                        maiores temporibus officiis! Eveniet itaque
                                        eligendi quod voluptatem, labore 
                                        aliquam voluptates blanditiis`);

  DIV.appendChild(P);
  P.appendChild(pText);

  container.appendChild(DIV);

  switchIcon(qDiv, cont, DIV, container);
}

function switchIcon(qDiv, cont, DIV, container){
  const SHRINK = document.createElement('i');
  const EXP2 = document.createElement('i');

  SHRINK.setAttribute('class', 'fas fa-minus');
  EXP2.setAttribute('class', 'fas fa-plus expand');

  EXP2.addEventListener('click', function(){faqAnswer(this)});

  qDiv.removeChild(cont); 
  qDiv.appendChild(SHRINK); 

  SHRINK.addEventListener('click', function(){removeAnswer(SHRINK, EXP2, qDiv, DIV, container)});
}

function removeAnswer(SHRINK, EXP2, qDiv, DIV, container){
  qDiv.removeChild(SHRINK);
  qDiv.appendChild(EXP2);
  container.removeChild(DIV);
}

for(let i = 0; i < EXPAND.length; i++){
  EXPAND[i].addEventListener('click', function(){faqAnswer(this)});
}