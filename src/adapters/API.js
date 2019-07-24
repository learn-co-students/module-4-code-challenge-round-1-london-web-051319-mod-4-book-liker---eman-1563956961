const ENDPOINT = 'http://localhost:3005/books';

const fetchBooks = () => {
    return fetch(ENDPOINT)
        .then(res => res.json())
}

export default {
    fetchBooks
}