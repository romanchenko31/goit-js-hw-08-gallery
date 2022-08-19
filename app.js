const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const ul = document.querySelector('.gallery.js-gallery');
const divModal = document.querySelector('.lightbox');
const imgModal = document.querySelector('.lightbox__image');
const btnModalClose = document.querySelector('.lightbox__button');
const divModalClose = document.querySelector('.lightbox__overlay');
const divOpenModal = document.querySelector('.lightbox__content');
    

ul.insertAdjacentHTML('beforeend', gallery(galleryItems));

function gallery (galleryItems){
  return galleryItems
  .map((value) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href='#'
  >
    <img
      class="gallery__image"
      src=${value.preview}
      data-source=${value.original}
      alt=${value.description}
    />
  </a>
</li>`
  })
  .join('');
}


ul.addEventListener('click', addModalBtn);
function addModalBtn(e) { 
  if (e.target.nodeName === 'IMG') {


    divModal.classList.add('is-open');
    imgModal.src = e.target.dataset.source;
    imgModal.alt = e.target.alt;
  
    let currentA = null;
    const itemCount = 9;
    if (!currentA) {
         currentA = e.target;
    }
    

    ul.addEventListener('keydown', (e) => {
     
       
      if (e.key === 'ArrowLeft') {        
        let nextLi = currentA.parentElement.parentElement.previousElementSibling;
        if (nextLi) {
          let nextImg = nextLi.querySelector('.gallery__image');
          currentA = nextImg; 
          imgModal.setAttribute('src', currentA.dataset.source);
          console.log(currentA);
        } 
      }else if(e.key === 'ArrowRight') {
          let nextLi = currentA.parentElement.parentElement.nextElementSibling;
        if (nextLi) {
            let nextImg = nextLi.querySelector('.gallery__image'); 
            currentA = nextImg;       
            imgModal.setAttribute('src', currentA.dataset.source);
            console.log(currentA);
        }
        
      }        
  })

  }
    if (divModal.classList.contains('is-open')) {
     document.addEventListener('keydown', closeModalEscape);
    }
   


}

btnModalClose.addEventListener('click',btnCloseModal)
function btnCloseModal(e) {
  if (e.target) { 
    scriptForCloseModal();
  }
 }

divModalClose.addEventListener('click', closeModalClickDiv)
function closeModalClickDiv(e) {
  if (e.target.nodeName === 'DIV') {
    scriptForCloseModal();
  }
}
  
function closeModalEscape(e){ 
  if (e.key === 'Escape') { 
   scriptForCloseModal();
  }
}

function scriptForCloseModal() {
  divModal.classList.remove('is-open');
  imgModal.src = '';
  if(!divModal.classList.contains('is-open')) {
        document.removeEventListener('keydown', closeModalEscape);
  }
}


 


