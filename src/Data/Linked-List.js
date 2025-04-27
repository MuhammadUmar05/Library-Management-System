import { nanoid } from 'nanoid';

class BookNode {
    constructor(id, title, author, desc, status, img, genre, next = null) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.desc = desc;
        this.status = status;
        this.img = img;
        this.genre = genre;
        this.next = next;
    }
}

class BookList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push = (title, author, desc, status, img, genre) => {
        const id = nanoid();
        const newNode = new BookNode(id, title, author, desc, status, img, genre);

        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    pop = () => {
        if (!this.head) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }
        let temp = this.head;
        while (temp.next !== this.tail) {
            temp = temp.next;
        }
        temp.next = null;
        this.tail = temp;
    }

    traverse = () => {
        const books = [];
        let temp = this.head;
        while (temp) {
            const bookData = {
                id: temp.id,
                title: temp.title,
                author: temp.author,
                desc: temp.desc,
                status: temp.status,
                img: temp.img,
                genre: temp.genre
            };
            books.push(bookData);
            temp = temp.next;
        }
        return books;
    }

    findByTitle = (title) => {
        const titleArr = []
        let temp = this.head;
        while (temp) {
            if (temp.title.toLowerCase() === title.toLowerCase()) {
                const titleData = {
                    id: temp.id,
                    title: temp.title,
                    author: temp.author,
                    desc: temp.desc,
                    status: temp.status,
                    img: temp.img,
                    genre: temp.genre
                }
                titleArr.push(titleData)
            };
            temp = temp.next;
        }
        return titleArr;
    }

    findByAuthor = (author) => {
        let temp = this.head;
        while (temp) {
            if (temp.author.toLowerCase() === author.toLowerCase()) {
                return {
                    id: temp.id,
                    title: temp.title,
                    author: temp.author,
                    desc: temp.desc,
                    status: temp.status,
                    img: temp.img,
                    genre: temp.genre
                };
            }
            temp = temp.next;
        }
        return null;
    }

    issueBook = (id) => {
        const borrowedBooks = []
        let temp = this.head
        while (temp) {
            if (temp.id === id) {
                if (temp.status == "available") {
                    temp.status = "issued";
                    const borrowedBook = {
                        id: temp.id,
                        title: temp.title,
                        author: temp.author,
                        desc: temp.desc,
                        status: temp.status,
                        img: temp.img,
                        genre: temp.genre
                    }
                    borrowedBooks.push(borrowedBook)
                }
            }
            temp = temp.next;
        }
        return borrowedBooks;
    }

    returnBook = (id) => {
        const returnedBooks = []
        let temp = this.head
        while (temp) {
            if (temp.id === id) {
                if (temp.status == "issued") {
                    temp.status = "available";
                    const returnedBook = {
                        id: temp.id,
                        title: temp.title,
                        author: temp.author,
                        desc: temp.desc,
                        status: temp.status,
                        img: temp.img,
                        genre: temp.genre
                    }
                    returnedBooks.push(returnedBook);
                }
            }
            temp = temp.next
        }
        return returnedBooks
    }
}

export { BookNode, BookList };