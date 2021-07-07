function benifitSlider(){
  let benifitsDivs = document.querySelectorAll('.benifits');
  let screenHeight = window.innerHeight / 1.3;

  let topData = [];
  for(let i = 0; i < benifitsDivs.length; i++){
    topData.push(benifitsDivs[i].getBoundingClientRect().top);
  }

  for(let i = 0; i < topData.length; i++){
    if(topData[i] < screenHeight){
      benifitsDivs[i].classList.add('benifits-s');
    }
  }

  console.log(topData);
}

window.addEventListener('scroll', benifitSlider);