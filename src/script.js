import Data from './data.js';
const modalClose = document.querySelector('.modal-close');
const galleryContainer = document.querySelector('.gallery-container');
const galleryModal = document.querySelector('.gallery-modal');
// const galleryModalBody = document.querySelector('.gallery-modal-body');
const projectName = document.querySelector('.project-name');
const projectDesc = document.querySelector('.project-desc');
// const projectContent = document.querySelector('.project-content');
const smallCarouselImages = document.querySelector('.carousel-smaller');
const activeCarouselImage = document.querySelector('.active-large');
const projectSummary = document.querySelector('.summary');
const projectTechnologies = document.querySelector('.technologies');
// const fadingActiveImage = document.querySelector('.fading');

function fadeImage(imageURL) {
  // activeCarouselImage.src = imageURL;
  // setTimeout(function changeFadeImage() {
  //   fadingActiveImage.src = imageURL;
  //   fadingActiveImage.classList.remove('fading');
  //   fadingActiveImage.classList.remove('fading');
  // }, 500);
}
function handleGalleryClick(event) {
  // TODO: add transition
  // fadingActiveImage.classList.remove('fading');
  // activeCarouselImage.classList.add('fading');
  // fadeImage(this.src);

  activeCarouselImage.src = this.src;
}

// Creates imageElements property on each project in the
// projects array.
Data.projects.forEach(function createImgElements(project) {
  // Making an HTML img element from each project
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

// Uses data from each project and to create DOM elements
Data.projects.forEach(function loadProjects(project) {
  const projectEntry = document.createElement('div');
  projectEntry.classList.add('gallery-item');

  // Sets up the image displayed in the gallery using
  // the passed in project
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

  // Creates an event listener that sets up the modal context
  projectEntry.addEventListener('click', setUpModalContext);

  galleryContainer.appendChild(projectEntry);

  function setUpModalContext() {
    projectName.textContent = project.name;
    projectDesc.textContent = project.info;
    activeCarouselImage.src = project.images[0];
    activeCarouselImage.alt = project.name + ' image';
    projectSummary.textContent = project.summary;
    projectTechnologies.innerHTML = project.technnologies
      .map(makeTechList)
      .join('');

    // fadingActiveImage.src = project.images[0];
    // fadingActiveImage.classList.remove('fading');
    smallCarouselImages.innerHTML = '';
    // Setting up the carousel images
    project.imageElements.forEach(function attachCarouselImages(image) {
      smallCarouselImages.appendChild(image);
    });

    galleryModal.classList.add('is-visible');
    function makeTechList(tech) {
      return `<li>${tech}</li>`;
    }
  }
});

modalClose.addEventListener('click', function addCloseButtonListener() {
  galleryModal.classList.remove('is-visible');
});
