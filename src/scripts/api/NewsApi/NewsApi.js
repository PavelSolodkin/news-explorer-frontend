const formatDate = () => {
  const days = 24 * 60 * 60 * 1000 * 7;
  const previousDate = new Date(new Date().getTime() - days).toISOString();
  return previousDate;
};

const datacreate = formatDate();
const datanow = new Date().toISOString();

export default class NewsApi {
  constructor() {
    this.apikey = 'a1abc1ced2c14d8fad4715759e741d23';
  }

  getNews(UserKeyWord) {
    return fetch(`http://nomoreparties.co/news/v2/everything?q=${UserKeyWord}&from=${datacreate}&sortBy=${datanow}&pageSize=100&apiKey=${this.apikey}`, {
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.message);
      })
      .catch((err) => console.log(err));
  }
}

