console.log('動いた！');

document.querySelector('#site-title')
  .textContent = '旧車コレクション';

const btn = document.querySelector('.submit-btn');
const message = document.querySelector('#form-message');

btn.addEventListener('click', () => {
  message.textContent = 'リアクションありがとうございます!';
});

let count = 0;
const likeBtn = document.querySelector('#like-btn');
const likeCount = document.querySelector('#like-count');

likeBtn.addEventListener('click', () => {
  count++;
  likeCount.textContent = String(count);

  if (count === 10) {
    likeCount.textContent = '10いいね達成！ありがとうございます！';
  }
});

const title = document.querySelector('#site-title');
if (title) {
  title.textContent = '旧車コレクション'
}

const btn = document.querySelector('.submit-btn');
const message = document.querySelector('#form-message');
if (btn && message) {
  btn.addEventListener('click', () => {
    message.textContent = 'リアクションありがとうございます。'

  });
}

if (likeBtn && likeCount) {

}

interface Item{title:string; category:string; description:string;}

const items:Item[]=[
  {title:'NSX',category:'スポーツカー',description:'高性能な旧車'},
  {title:'スカイライン',category:'スーパーカー',description:'日本の名車'},
];

