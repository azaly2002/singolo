let b = document.getElementsByClassName('left')[0]
let a = document.getElementsByClassName('right')[0]
let pic1 = document.getElementById('img1')
let pic2 = document.getElementById('img2')


b.addEventListener('click', Onclickb)
function Onclickb () {

    if (pic1.style.display == 'none') {
        pic2 = pic2.style.display = 'none'
        pic1 = pic1.style.display = 'flex'
      } else {
        pic1 = pic1.style.display = 'none'
        pic2 =  pic2.style.display = 'flex'
      }

    // if(pic1.style.display === "none"){
    //     pic2 = pic2.style.display = "flex"
    // } else if (pic1.style.display = "flex") {
    //     pic2 = pic2.style.display = "none"
    // }

}

a.addEventListener('click', Onclicka)
function Onclicka () {

    if (pic1.style.display == 'none') {
        pic2 = pic2.style.display = 'none'
        pic1 = pic1.style.display = 'flex'
      } else {
        pic1 = pic1.style.display = 'none'
        pic2 =  pic2.style.display = 'flex'
      }
 
    // if(pic1.style.display === "flex"){
    //     pic2 = pic2.style.display ="none"

    // } else if (pic1.style.display = "flex"){
    //     pic1 = pic1.style.display = "none"
    // }

}



