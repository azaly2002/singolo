//slider
let b = document.getElementsByClassName('left')[0];
let a = document.getElementsByClassName('right')[0];
a.addEventListener('click',() =>  Onclick())
b.addEventListener('click', () => Onclick())
function Onclick () {
  let pic = Array.from(document.querySelectorAll('.img1'));
      pic[1].classList.toggle('active')
      pic[0].classList.toggle('active')
    }

//border
let switchNow = true;
const portfolioPic = portfolio.querySelectorAll(".pictures");
portfolioPic.forEach(image => image.addEventListener("click", (event) => {
  if ( event.target.classList.contains("bordered") ) {
    switchNow = false;
  }

  portfolio.querySelectorAll("img").forEach(pic => pic.classList.remove("bordered"));
  
  if (switchNow) {
    event.target.classList.add("bordered");
  }

  switchNow = true;
}));
