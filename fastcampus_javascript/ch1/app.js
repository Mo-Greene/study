const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
//false는 동기적으로 가져온다는 의미

/**
 * ajax Get Data
 * @param {} url 
 * @returns 
 */
function getData(url) {
    ajax.open('GET', url, false);
    ajax.send();

    return JSON.parse(ajax.response);
}

function newsFeed() {
    const newsFeed = getData(NEWS_URL);
    const newsList = [];

    newsList.push('<ul>');
    for(let i = 0; i < 10; i++) {
        newsList.push(`
            <li>
                <a href="#${newsFeed[i].id}">
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
                </a>
            </li>
        `);
    }
    
    newsList.push('</ul>')
    container.innerHTML = newsList.join('');
}

function newsDetail() {
    //location == 주소와 관련된 객체
    const id = location.hash.substring(1);
    const newsContent = getData(CONTENT_URL.replace('@id', id));
    
    container.innerHTML = `
        <h1>${newsContent.title}</h1>

        <div>
            <a href="#">목록</a>
        </div>
    `;
}

function router() {
    const routePath = location.hash;

    if (routePath === '') {
        newsFeed();
    } else {
        newsDetail();
    }
}

window.addEventListener('hashchange', router);
router();
//코드가 dom api를 이용해 진행되고 있다. 하지만 html 코드와는 다르게 가독성이 매우 떨어진다는 것이 문제