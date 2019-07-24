const ENDPOINT = 'http://localhost:3005/books';

const fetchBooks = () => {
    return fetch(ENDPOINT)
        .then(res => res.json())
        // .then(books => console.table(books))
}

export default {
    fetchBooks
}