const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeElements.forEach((element) => {
  observer.observe(element);
});

// Галерея
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const galleryItems = document.querySelectorAll('.list-image__item-image');
  
  let currentIndex = 0;
  
  // Открытие модального окна
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      currentIndex = index;
      modal.style.display = 'block';
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });
  
  // Закрытие модального окна
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Клик вне изображения
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Навигация стрелками
  prevBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    navigate(-1);
  });
  
  nextBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    navigate(1);
  });
  
  // Навигация клавиатурой
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'block') {
      if (e.key === 'ArrowLeft') {
        navigate(-1);
      } else if (e.key === 'ArrowRight') {
        navigate(1);
      } else if (e.key === 'Escape') {
        modal.style.display = 'none';
      }
    }
  });
  
  function navigate(direction) {
    currentIndex += direction;
    
    if (currentIndex >= galleryItems.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = galleryItems.length - 1;
    }
    
    modalImg.src = galleryItems[currentIndex].src;
    modalImg.alt = galleryItems[currentIndex].alt;
  }
});