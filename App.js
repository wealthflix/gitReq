const images = document.querySelector('.img');

let changeImges = {
   img : "./images/modernhouse.jpg",
   img1 : "./images/ancientpalce.jpg",
   img2 : "./images/Nature.jpg",
   img3 : "./images/night.jpg",
   img4 : "./images/palm.jpg",
   img5 : "./images/Pyramid.jpg",
   img6 : "./images/rome.jpg",
   img7 : "./images/ancientpalce.jpg",
}

let colors = [
   "ghostwhite",
   "bisque",
   "rebeccapurple",
   "FORESTGREEN",
   "STEELBLUE",
   "#cac0ae",
]
let index = 0;
let entry = Object.values(changeImges)


images.addEventListener('click', function(e) {
   images.style.cssText = `background:url(${entry[index]}) no-repeat center center / cover border-box; transition: all 0.20s linear;`
   document.body.children[0].style.background =  colors[index]
   index = index >= entry.length -1 ? 0 : index + 1;
   index = index >= colors.length -1 ? 0 : index + 1;
})

