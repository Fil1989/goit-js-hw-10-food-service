export default {
  searchQuery: '',

  page: 1,

  fecthArticles() {
    const url = `https://newsapi.org/v2/everything?q=${this.query}&pageSize=12&page=${this.page}`;
    const options = {
      headers: {
        Authorization: '2dcf3d6e1b1d4e0a8b3a7590d41ca5d7',
      },
    };
    return fetch(url, options)
      .then(response => response.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  set query(value) {
    this.searchQuery = value;
  },
  get query() {
    return this.searchQuery;
  },
};
