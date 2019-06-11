const modalClose = document.querySelector('.modal-close');
const galleryItem = document.querySelectorAll('.gallery-item');
const galleryModal = document.querySelector('.gallery-modal');

const projectName = document.querySelector('.project-name');
const projectDesc = document.querySelector('.project-desc');
const projectContent = document.querySelector('.project-content');

const projObj = [
  {
    name: 'Project 1',
    label: 'Enterprise pencil solution',
    info: 'Project 1 Description',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
  },
  {
    name: 'Project 2',
    label: 'A mobile adventure',
    info: 'Project 2 Description',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
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
  },
  {
    name: 'Project 4',
    label: 'Read more about project 4',
    info: 'Project 4 Description',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
  },
  {
    name: 'Project 5',
    info: 'Project 5 Description',
    images: [
      'http://via.placeholder.com/250x250',
      'http://via.placeholder.com/250x250',
    ],
  },
];

galleryItem.forEach((item, index) => {
  item.querySelector('.gallery-label > h2').textContent = projObj[index].name;

  item.querySelector('.gallery-sublabel').textContent = projObj[index].label;

  item.addEventListener('click', () => {
    projectName.textContent = projObj[index].name;
    projectDesc.textContent = projObj[index].info;

    let projectImages = '';
    projObj[index].images.forEach((imgURL) => {
      projectImages += `<img src=${imgURL}>`;
    });
    projectContent.innerHTML = projectImages;

    galleryModal.classList.add('is-visible');
  });

  // $(document.querySelector('body')).css('overflow-y', 'hidden');
});

modalClose.addEventListener('click', () => {
  galleryModal.classList.remove('is-visible');
  // body.setAttribute('overflow-y', 'auto');
});
