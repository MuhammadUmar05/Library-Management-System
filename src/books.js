const books = [
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic Fiction",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/61dRoDRubtL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "A tragic story of love and loss during the Jazz Age in America."
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "A chilling vision of a totalitarian future governed by surveillance and propaganda."
  },
  {
    "id": 3,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Historical Fiction",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY327_FMwebp_QL65_.jpg",
    "description": "A powerful depiction of racial injustice in the American South."
  },
  {
    "id": 4,
    "title": "The Lean Startup",
    "author": "Eric Ries",
    "genre": "Business",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/61hWyOky6bL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "Strategies for efficient product development and startup innovation."
  },
  {
    "id": 5,
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "genre": "Programming",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "Best practices for writing clean, readable, and maintainable code."
  },
  {
    "id": 6,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Philosophical Fiction",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/71zHDXu1TaL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "A mystical journey of self-discovery and destiny."
  },
  {
    "id": 7,
    "title": "The Pragmatic Programmer",
    "author": "Andrew Hunt",
    "genre": "Programming",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/71f1jieYHNL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "Essential tips and philosophies for modern software development."
  },
  {
    "id": 8,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Fiction",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/71nXPGovoTL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "A teenage boy’s cynical journey through New York City."
  },
  {
    "id": 9,
    "title": "Atomic Habits",
    "author": "James Clear",
    "genre": "Self-help",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/71F4+7rk2eL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "A practical guide to building good habits and breaking bad ones."
  },
  {
    "id": 10,
    "title": "A Brief History of Time",
    "author": "Stephen Hawking",
    "genre": "Science",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/91ebghaV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "Exploring black holes, time travel, and the origin of the universe."
  },
  {
    "id": 11,
    "title": "The Road",
    "author": "Cormac McCarthy",
    "genre": "Post-Apocalyptic",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/51M7XGLQTBL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "A father and son journey through a devastated world."
  },
  {
    "id": 12,
    "title": "Deep Work",
    "author": "Cal Newport",
    "genre": "Productivity",
    "status": "available",
    "image": "https://www.libertybooks.com/image/cache/catalog/9780349411903-640x996.jpg?q6",
    "description": "Rules for focused success in a distracted world."
  },
  {
    "id": 13,
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "genre": "History",
    "status": "available",
    "image": "https://www.libertybooks.com/image/cache/01%20ZEESHAN/1-100/Sapiens-A-Brief-History-of-Humankind-640x996.jpg?q6",
    "description": "A brief history of humankind from evolution to modern times."
  },

  {
    "id": 15,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "status": "available",
    "image": "https://www.bookshub.pk/wp-content/uploads/2024/02/The-Hobbit-By-J.-R.-R.-Tolkien.jpg",
    "description": "Bilbo Baggins’ unexpected journey to the Lonely Mountain."
  },
  {
    "id": 16,
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "genre": "Finance",
    "status": "available",
    "image": "https://duabookpalace.com/cdn/shop/products/dua-book-palace-online-the-psychology-of-money-38340209672424.jpg?v=1663837942",
    "description": "Timeless lessons on wealth, greed, and happiness."
  },
  {
    "id": 17,
    "title": "Start With Why",
    "author": "Simon Sinek",
    "genre": "Leadership",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/71tQ6jq5-ZL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "How great leaders inspire action by starting with purpose."
  },
  {
    "id": 18,
    "title": "Design Patterns",
    "author": "Erich Gamma",
    "genre": "Software Engineering",
    "status": "available",
    "image": "https://m.media-amazon.com/images/I/81IGFC6oFmL._AC_UY327_FMwebp_QL65_.jpg",
    "description": "Reusable object-oriented solutions to common design problems."
  },
  {
    "id": 19,
    "title": "Eloquent JavaScript",
    "author": "Marijn Haverbeke",
    "genre": "Programming",
    "status": "available",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
    "description": "A modern introduction to programming in JavaScript."
  },
  {
    "id": 20,
    "title": "Thinking, Fast and Slow",
    "author": "Daniel Kahneman",
    "genre": "Psychology",
    "status": "available",
    "image": "https://friendsbook.pk/cdn/shop/files/61fdrEuPJwL._SL1500.jpg?v=1727084144",
    "description": "Insights into the two systems that drive the way we think."
  }
]


export default books