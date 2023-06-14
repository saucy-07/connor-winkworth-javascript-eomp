let books = [
  {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654565596i/45154547.jpg",
    title: "A Desolation Called Peace",
    author: "Arkady Martine",
    genre: "Science Ficton",
    rands: 499.99,
  },
  {
    id: 2,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1626710416l/58446227.jpg",
    title: "Sea of Tranquility",
    author: "Emily St. John Mandel",
    genre: "Science Fiction",
    rands: 349.99,
  },
  {
    id: 3,
    image:
      "https://booklounge.co.za/wp-content/uploads/2023/05/eyes-of-the-voic.jpg",
    title: "Eyes of the Void",
    author: "Adrian Tchaikovsky",
    genre: "Science Fiction",
    rands: 249.99,
  },
  {
    id: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627483822i/57850265.jpg",
    title: "How High We Go in the Dark",
    author: "Sequoia Nagamatsu",
    genre: "Science Fiction",
    rands: 349.99,
  },
  {
    id: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631539191i/40864030.jpg",
    title: "A Prayer for the Crown-Shy: A Monk and Robot Book",
    author: "Becky Chambers",
    genre: "Science Fiction",
    rands: 359.99,
  },
  {
    id: 6,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1652627981i/60784359.jpg",
    title: "Exiles",
    author: "Jane Harper",
    genre: "Thriller",
    rands: 349.99,
  },
  {
    id: 7,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1675644340l/60833953.jpg",
    title: "Going Zero: A Novel",
    author: "Anthony McCarten",
    genre: "Thriller",
    rands: 609.99,
  },
  {
    id: 8,
    image:
      "https://www.panmacmillan.co.za/static/3480281e927985f072e210bdece5445c/a6fd0/9781529093643.webp",
    title: "Red Queen",
    author: "Juan Gómez-Jurado",
    genre: "Thriller",
    rands: 289.99,
  },
  {
    id: 9,
    image:
      "https://booklounge.co.za/wp-content/uploads/2023/03/marriage-act.jpg",
    title: "The Marriage Act",
    author: "John Marrs",
    genre: "Thriller",
    rands: 339.99,
  },
  {
    id: 10,
    image:
      "https://booklounge.co.za/wp-content/uploads/2023/03/murders-at-fleat-1.jpg",
    title: "The Murders at Fleat House",
    author: "Lucinda Riley",
    genre: "Thriller",
    rands: 349.99,
  },
  {
    id: 11,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1641926961l/59040894.jpg",
    title: "A Caribbean Heiress in Paris",
    author: "Adriana Herrera",
    genre: "Romance",
    rands: 344.99,
  },
  {
    id: 12,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638467995i/59345253.jpg",
    title: "Something Wilder",
    author: "Christina Lauren",
    genre: "Romance",
    rands: 230.99,
  },
  {
    id: 13,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646064290i/57007967.jpg",
    title: "A Lady for a Duke",
    author: "Alexis Hall",
    genre: "Romance",
    rands: 199.99,
  },
  {
    id: 14,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626896884i/57693870.jpg",
    title: "In a New York Minute",
    author: "Kate Spencer",
    genre: "Romance",
    rands: 229.99,
  },
  {
    id: 15,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663130429i/60568471.jpg",
    title: "Before I Let Go",
    author: "Kennedy Ryan",
    genre: "Romance",
    rands: 324.99,
  },
  {
    id: 16,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442800485i/18600.jpg",
    title: "Touching the Void",
    author: "Joe Simpson",
    genre: "Adventure",
    rands: 124.99,
  },
  {
    id: 17,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391329559i/139069.jpg",
    title: "Endurance: Shackleton's Incredible Voyage",
    author: "Alfred Lansing",
    genre: "Adventure",
    rands: 152.99,
  },
  {
    id: 18,
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Into_the_Wild_%28book%29_cover.png",
    title: "Into the Wild",
    author: "Jon Krakauer",
    genre: "Adventure",
    rands: 161.99,
  },
  {
    id: 19,
    image: "https://m.media-amazon.com/images/I/81mm2kMm5yL.jpg",
    title: "The last season",
    author: "Eric Blehm",
    genre: "Adventure",
    rands: 215.99,
  },
  {
    id: 20,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388189974i/9791.jpg",
    title: "A Walk in the Woods",
    author: "Bill Bryson",
    genre: "Adventure",
    rands: 161.99,
  },
];

function displayBooks() {
  let display = document.getElementById("booksDisplay");
  books.forEach((book) => {
    let bookBlock = document.createElement("div");
    bookBlock.classList.add("book-block");
    bookBlock.innerHTML += `
      <div class="book-image-div">
      <img src="${book.image}" alt="${book.title}">
      </div>
      <div class="book-title-div">
      <h4>${book.title}</h4>
      </div>
      <div class="book-author-div">
      <h4>${book.author}</h4>
      </div>
      <div class="book-genre-div">
      <h4>${book.genre}</h4>
      </div>
      <div class="price-cart-div">
      <div class="book-price-div">
      <h4>R${book.rands}</h4>
      </div>
      <div class="cart-button-div">
      <button onclick="addToCart(${book.id})">Add</button>
      </div>
      </div>
      `;
    display.appendChild(bookBlock);
  });
}

displayBooks();

let cart = [];

function addToCart(id) {
  const item = books.find((book) => book.id === id);
  console.log(cart);
  cart.push(item);
}

var modal = document.getElementById("modal");
var btn = document.getElementById("basketLogo");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
