import axios from "axios";

async function searchBooks(term) {
  const response = await axios.get(
    `https://api.itbook.store/1.0/search/${term}`
  );
  return response.data.books;
}

export default searchBooks;
