//Reading list

class Book{
    title;
    genre;
    author;
    read;

    constructor(objeto){
        this.title = objeto.title;
        this.genre = objeto.genre;
        this.author = objeto.author;
        this.read = objeto.read;
    }


}

class BookLists{
    book_read;
    book_not_read;
    next_book;
    current_book;
    last_book_read;
    array;
}