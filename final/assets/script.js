console.log('loaded!')

const closeButton = document.querySelector('.close-lightbox');
const galleryButtons = document.querySelectorAll('.gallery-thumbnail-wrapper');
const lightbox = document.querySelector('.lightbox');
const lightboxImgName = document.querySelector('.lightbox-image-title');
const lightboxImgDesc = document.querySelector('.lightbox-image-desc');
const lightboxImage = document.querySelector('.lightbox-image');

console.log('closebutton is', closeButton)
console.log('gallerybuttons is', galleryButtons)
console.log('lightbox is', lightbox)

closeButton.addEventListener ('click', () => {
    console.log('close clicked');
     document.querySelector('.lightbox').style.display = 'none';
});

const windowSize = window.matchMedia("(max-width: 1280px)")

function checkWindowLightbox(windowSize) {
        if (windowSize.matches) {
            document.querySelector('.lightbox').style.flexDirection = 'column';
        } else {
            document.querySelector('.lightbox').style.flexDirection = 'row';
        }
}

windowSize.addEventListener("change", function() {
  checkWindowLightbox(windowSize);
}); 

if (galleryButtons) {
    galleryButtons.forEach((galleryButton) => {
        galleryButton.addEventListener('click', () => {
            console.log(galleryButton.dataset.image);
            console.log(galleryButton.dataset.title);
            console.log(galleryButton.dataset.description);

            console.log(galleryButton);

            if (lightbox) {
                lightboxImage.src = galleryButton.dataset.image;
                lightboxImgName.innerText = galleryButton.dataset.title;
                lightboxImgDesc.innerText = galleryButton.dataset.description;

                document.querySelector('.lightbox').style.display = 'flex'
                if (windowSize.matches) {
                    document.querySelector('.lightbox').style.flexDirection = 'column';
                } else {
                    document.querySelector('.lightbox').style.flexDirection = 'row';
                }
                
            }
        });
    });
}
