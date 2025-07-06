const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const filterButtons = document.getElementById('.filter-btn');
const galleryItems = document.getElementById('.gallery-item');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openLightbox(img.src);
  });
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Highlight active button
        filterButtons.forEach(b => b.classlist.remove('active'));
        btn.classlist.add('active');

        const filter = btn.getAttribute('data-filter');

    galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    });
});

function openLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  lightboxImg.src = images[currentIndex].src;
}