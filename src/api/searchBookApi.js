import axios from "axios";

async function searchBooks(term) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://api.itbook.store/1.0/search/${term}`
      );
      resolve(response.data.books);
    }, 1000);
  });
}

export default searchBooks;
