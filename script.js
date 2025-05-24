
// DOM Elements
const likeButtons = document.querySelectorAll('.like-btn');
const newPostBtn = document.getElementById('newPostBtn');
const newPostForm = document.getElementById('newPostForm');

// Like button functionality
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('fa-regular');
    button.classList.toggle('fa-solid');

    // Red color toggle
    if (button.classList.contains('fa-solid')) {
      button.style.color = 'red';
    } else {
      button.style.color = '';
    }
  });
});

// Modal open and close functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Elements
const newPostBtn = document.getElementById('newPostBtn');
const newPostForm = document.getElementById('newPostForm');
const closeBtn = document.querySelector('.close');

// Open modal on button click
newPostBtn.addEventListener('click', () => {
  openModal('newPostModal');
});

// Close modal on close button click
closeBtn.addEventListener('click', () => {
  closeModal('newPostModal');
});

//Close modal when clicking outside modal content
window.addEventListener('click', function (e) {
  const modal = document.getElementById('newPostModal');
  if (e.target === modal) {
    closeModal('newPostModal');
  }
});

// Form submission
newPostForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('postTitle').value;
  const imageFile = document.getElementById('postImage').files[0];

  if (imageFile) {
    const newPost = {
      image: URL.createObjectURL(imageFile),
      title: title,
      liked: false
    };

    console.log('New Post:', newPost);

    closeModal('newPostModal');
    this.reset();
  }
});

// New post functionality
newPostBtn.addEventListener('click', function() {
    openModal('newPostModal');
});

newPostForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const imageFile = document.getElementById('postImage').files[0];

    if (imageFile) {
        const newPost = {
            image: URL.createObjectURL(imageFile),
            title: title,
            liked: false
        };
        
    posts.unshift(newPost); // Add to beginning
    renderPosts();
    closeModal('newPostModal');
    this.reset();
}
});
main
