console.log('loaded!')

const closeButton = document.querySelector('.close-lightbox');
const openButton = document.querySelector('.gallery-thumbnail');
const lightbox = document.querySelector('.lightbox');
const imgName = document.querySelector('.lightbox-image-title');
const imgDesc = document.querySelector('.lightbox-image-text');
const lightboxImage = document.querySelector('.lightbox-image');
console.log(closeButton)
console.log(openButton)
console.log(lightbox)

//this isn't working, i think because it's a queryselectorall...?
openButton.addEventListener ('click', () => {
    console.log('lightbox clicked');
     document.querySelector('.lightbox').style.display = 'flex';
});

closeButton.addEventListener ('click', () => {
    console.log('close clicked');
     document.querySelector('.lightbox').style.display = 'none';
});

