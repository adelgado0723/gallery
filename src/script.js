const modalClose = document.querySelector('.modal-close');
const galleryContainer = document.querySelector('.gallery-container');
const galleryModal = document.querySelector('.gallery-modal');

const galleryModalBody = document.querySelector('.gallery-modal-body');
const projectName = document.querySelector('.project-name');
const projectDesc = document.querySelector('.project-desc');
const projectContent = document.querySelector('.project-content');

const projects = [
  {
    name: 'Project 1',
    label: 'Enterprise pencil solution',
    info: 'Project 1 Description',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
    background: 'https://picsum.photos/id/555/800/800',
  },
  {
    name: 'Project 2',
    label: 'A mobile adventure',
    info: 'Project 2 Description',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
    background: 'https://picsum.photos/id/528/800/800',
  },
  {
    name: 'Project 3',
    label: 'Hacking',
    info: 'Project 3 Description',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
    background: 'https://picsum.photos/id/657/800/800',
  },
  {
    name: 'Project 4',
    label: 'Read more about project 4',
    info: 'Project 4 Description',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
    background: 'https://picsum.photos/id/487/800/800',
  },
  {
    name: 'Project 5',
    label: 'Read more about project 5',
    info: 'Project 5 Description',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
    background: 'https://picsum.photos/id/481/800/800',
  },
  {
    name: 'Project 6',
    info: 'Project 6 Description',
    label: 'Read more about project 6',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
    background: 'https://picsum.photos/id/482/800/800',
  },
  {
    name: 'Project 7',
    info: 'Project 7 Description',
    label: 'Read more about project 7',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
    background: 'https://picsum.photos/id/483/800/800',
  },
  {
    name: 'Project 8',
    info: 'Project 8 Description',
    label: 'Read more about project 8',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
    background: 'https://picsum.photos/id/455/800/800',
  },
];

projects.forEach((project) => {
  const projectEntry = document.createElement('div');
  projectEntry.classList.add('gallery-item');

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

  projectEntry.addEventListener('click', () => {
    projectName.textContent = project.name;
    projectDesc.textContent = project.info;
    let projectImages = '';
    project.images.forEach((imgURL) => {
      projectImages += `<img src=${imgURL}>`;
    });
    projectContent.innerHTML = projectImages;
    galleryModal.classList.add('is-visible');
    galleryModalBody.classList.add('is-visible');
  });

  galleryContainer.appendChild(projectEntry);
  // document.querySelector('body').setAttribute('overflow-y', 'hidden');
});

modalClose.addEventListener('click', () => {
  galleryModal.classList.remove('is-visible');

  galleryModalBody.classList.remove('is-visible');
  // document.querySelector('body').setAttribute('overflow-y', 'auto');
});
