const ajax =new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
//false는 동기적으로 가져온다는 의미
ajax.open('GET', NEWS_URL, false);
ajax.send();
// console.log(ajax.response);

const newsFeed = JSON.parse(ajax.response);
// console.log(newsFeed);
const ul = document.createElement('ul');

for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');

    li.innerHTML = newsFeed[i].title;
    ul.appendChild(li);
}

document.getElementById("root").appendChild(ul);