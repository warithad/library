const main = document.querySelector(".main");
const modal = document.getElementById('modal');
const openModal = document.getElementById('add-book');


const form = document.getElementById('create-book');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const submit = document.getElementById('submit-book');

let library = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary(book){
    library.push(book);
    
    
    const div = createDiv(book);
    div.classList.add('card');
    main.appendChild(div);
}

openModal.addEventListener('click', ()=>{
    modal.showModal();
})

// creates card div
function createDiv(book){
    const div = document.createElement('div');
    
    const t = document.createElement('h1');
    t.classList.add('card-title');

    const a = document.createElement('h2');
    a.classList.add('card-author');
    
    const p = document.createElement('h2');
    p.classList.add('card-pages');

    const but = document.createElement('button');
    but.classList.add('card-button');
    
    but.textContent = 'Read';
    t.textContent = book.title.toUpperCase();
    a.textContent = 'Author: ' + book.author;
    p.textContent = 'Pages: '+book.pages;

    div.appendChild(t);
    div.appendChild(a);
    div.appendChild(p);
    div.appendChild(but);

    console.log(div);
    return div;
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    console.log(book + ' created');
    addBookToLibrary(book);
    modal.close();
})

window.onload =()=>{
    const demoBook = new Book('Hocus Pocus', 'Me', '200');
    addBookToLibrary(demoBook);
}