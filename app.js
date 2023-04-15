document.querySelector('.get-news').addEventListener('click', getNews);

function getNews(e) {
  const keyword = document.querySelector('input[type="text"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://newsapi.org/v2/everything?q=${keyword}&apiKey=4590aab7121447c3a85bc7757cc4586a`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response =  JSON.parse(this.responseText);

      // console.log(response);
      
      let output = '';

      if(response.status === 'ok') {
          response.articles.forEach(function(news){
            output += `<h3>${news.title}</h3>
            <p>${news.description}</p>`
          });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.news').innerHTML = output;
    }
  }
  xhr.send();

  e.preventDefault();
}