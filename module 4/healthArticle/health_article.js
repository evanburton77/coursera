var xhr = new XMLHttpRequest();

var url = './health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function(){
var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');

articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });
}
  xhr.send();

var xhr2 = new XMLHttpRequest();
var url2 = './news_article.json';

xhr2.open('GET', url2, true);
xhr2.responseType = "json";
xhr2.onload = function() {

    var articles = xhr2.response.articles;
    var articlesDiv = document.getElementById("newsArticles");

    var newsArticle = document.createElement("p");
    newsArticle.textContent = articles;

    articlesDiv.appendChild(newsArticle);

  // articlesDiv.innerHTML = articles;
}
xhr2.send();

var xhr3 = new XMLHttpRequest();
var url3 = './sports_article.json';


xhr3.open('GET', url3, true);
xhr3.responseType = 'json';
xhr3.onload = function() {
    var articles = xhr3.response.articles;
    var articlesDiv = document.getElementById("sportsArticles");

    var sportsArticle = document.createElement("p");
     sportsArticle.textContent = articles;

    articlesDiv.appendChild(sportsArticle);
}

xhr3.send();