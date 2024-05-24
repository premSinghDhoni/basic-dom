
const images = document.querySelectorAll('.imgCont');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const dots = document.querySelectorAll('.dot');
let counter = 0;
let debounce = false;

function updateImages() {
  images.forEach((image, index) => {
    const a=image.style.transform = `translateX(${(index - counter) * 100}%)`;
    console.log(a);
  });

  // Update dots
  dots.forEach((dot, index) => {
    if (index === counter) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function handlePrevClick() {
  if (!debounce) {
    debounce = true;
    counter = (counter > 0) ? counter - 1 : images.length - 1;
    updateImages();
    setTimeout(() => debounce = false, 300); // Adjust timeout based on your transition duration
  }
}

function handleNextClick() {
  if (!debounce) {
    debounce = true;
    counter = (counter < images.length - 1) ? counter + 1 : 0;
    updateImages();
    setTimeout(() => debounce = false, 300); // Adjust timeout based on your transition duration
  }
}

// Initial setup
updateImages();

prev.addEventListener('click', handlePrevClick);
next.addEventListener('click', handleNextClick);

// Add click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    counter = index;
    updateImages();
  });
});
