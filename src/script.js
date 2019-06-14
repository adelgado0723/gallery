import Data from './data.js';
const modalClose = document.querySelector('.modal-close');
const galleryContainer = document.querySelector('.gallery-container');
const galleryModal = document.querySelector('.gallery-modal');
const galleryModalBody = document.querySelector('.gallery-modal-body');
const projectName = document.querySelector('.project-name');
const projectDesc = document.querySelector('.project-desc');
const projectContent = document.querySelector('.project-content');

function handleGalleryClick(event) {
  //refresh carousel
  console.log('Click event hooked up', event);
}

// Creating and storing an img el element for
// each image attached to each project
Data.projects.forEach(function createImgElements(project) {
  project.imageElements = project.images.map(function makeCarouselItem(
    url,
    index
  ) {
    const carouselImage = document.createElement('img');
    carouselImage.src = url;
    carouselImage.alt = project.name + ' Image';
    carouselImage.setAttribute('data-index', index);
    carouselImage.addEventListener('click', handleGalleryClick);
    return carouselImage;
  });
});

Data.projects.forEach((project) => {
  const projectEntry = document.createElement('div');
  projectEntry.classList.add('gallery-item');

  // TODO : create this array and store it on loading
  projectEntry.innerHTML = `     
            <div class="img-container">
              <div class="img">
                <div class="img-overlay"></div>
                <div class="gallery-label">
                  <h2>${project.name}</h2>
                  <span class="gallery-sublabel">${project.label}</span>
                </div>
              </div>
            </div>
    `;

  const background = projectEntry.querySelector('.img');
  background.style.backgroundImage = `url(${project.background})`;

  projectEntry.addEventListener('click', function addProjectClickListener() {
    projectName.textContent = project.name;
    projectDesc.textContent = project.info;
    projectContent.innerHTML = '';
    // Set the active image

    // Setting up the carousel images
    project.imageElements.forEach(function attachCarouselImages(image) {
      projectContent.appendChild(image);
    });
    // const carousel = `
    //   <div class="carousel">
    //   </div>
    // `;

    // TODO : remove one of these
    galleryModal.classList.add('is-visible');
    galleryModalBody.classList.add('is-visible');
  });

  galleryContainer.appendChild(projectEntry);
  // document.querySelector('body').setAttribute('overflow-y', 'hidden');
});

modalClose.addEventListener('click', function addCloseButtonListener() {
  // TODO : remove one of these
  galleryModal.classList.remove('is-visible');
  galleryModalBody.classList.remove('is-visible');
  // document.querySelector('body').setAttribute('overflow-y', 'auto');
});
