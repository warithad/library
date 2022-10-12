const main = document.querySelector(".main");
const modal = document.getElementById('modal');
const openModal = document.getElementById('add-book');
const submit = document.getElementById('submit-book');

const form = document.getElementById('create-book');
// const submit = document.getElementById('submit-book');

const library = (() =>{
    let shelf = [];

    const addBook = (book) =>{
        if(typeof book === Book){
            shelf.push(book);
        }
    }

    const removeBook = (book) =>{
    }

    return {addBook, removeBook};
})();

class Book {
    
    title = '';
    author ='';
    pages = '';
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    get title(){
        return this.title;
    }

    get author(){
        return this.author;
    }

    get pages(){
        return this.pages;
    }

    set title(val){
        this.title = val;
    }

    set author(val){
        this.author = val;
    }

    set pages(val){
        this.pages = val;
    }
}

openModal.addEventListener('click', () =>{
    resetInputs();
    modal.showModal();
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    console.log(e);
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const newBook = new Book(title, author, pages);
    console.log(newBook);

    library.addBook(newBook);
    addNewDiv(title, author, pages);
    modal.close();
    
})

function addNewDiv(title, author, pages){
    const div = document.createElement('div');

    console.log(title);
    const cTitle = document.createElement('h2');
    cTitle.textContent = `Title: ${title}`;
    cTitle.classList.add('card-title');

    const cAuthor = document.createElement('h2');
    cAuthor.textContent = `Author: ${author}`;
    cAuthor.classList.add('card-author');

    const cPages = document.createElement('h2');
    cPages.textContent = `Pages: ${pages}`;
    cAuthor.classList.add('card-pages');

    const buttonDiv = document.createElement('button');
    buttonDiv.classList.add('read');
    buttonDiv.textContent = 'Read';

    buttonDiv.addEventListener('click', (e)=>{
        checkReadStatus(e);
    });

    div.classList.add('card');

    div.append(cTitle, cAuthor, cPages, buttonDiv);

    main.appendChild(div);

}

const checkReadStatus =(e)=>{
    if(e.target.textContent === 'Read'){
        e.target.textContent = 'Unread';
        e.target.classList.remove('read');
        e.target.classList.add('unread');
    }
    else {
        e.target.textContent = 'Read';
        e.target.classList.remove('unread');
        e.target.classList.add('read');
    }
}

function resetInputs(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}