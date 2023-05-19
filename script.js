const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", toggleHamburgerMenu);

navMenu.addEventListener('click', toggleHamburgerMenu);

function toggleHamburgerMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const firstProduct = data.products[0];
    const productPhotos = firstProduct.images;
    renderSlider(productPhotos);
  })
  .catch(error => {
    console.log('Error fetching product data:', error);
  });


function renderSlider(photos) {
  const slider = document.getElementById('slider');

  photos.slice(0, 4).forEach((photoUrl) => {
    const image = document.createElement('img');
    image.src = photoUrl;
    slider.appendChild(image);
  });

  const pagination = document.getElementById('pagination');

  pagination.addEventListener('click', handlePaginationClick);

  function handlePaginationClick(event) {
    const clickedDot = event.target;
    if (clickedDot.classList.contains('page-dot')) {
      const index = parseInt(clickedDot.dataset.index);
      scrollToIndex(index);
    }
  }

  function scrollToIndex(index) {
    const scrollAmount = index * slider.offsetWidth;
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

// fetch('https://dummyjson.com/products')
//   .then(response => response.json())
//   .then(data => {
//     const products = data.products;
//     console.log(products);
//   })
//   .catch(error => {
//     console.error('Error fetching product data:', error);
//   });

// fetch('https://api.github.com/users/mlatysheva/repos')
//   .then(response => response.json())
//   .then(data => {
//     for (let i in data) {
//       console.log('Repo:', data[i].name);

//       console.log('Description:', data[i].description);

//       console.log('URL:', data[i].html_url);

//       console.log('=========================') 
//     }
// });