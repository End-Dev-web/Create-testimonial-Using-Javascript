const reviews = [
    {
      id: 1,
      name: "john smith",
      job: "Web Developer",
      img:
        "img/test-1.jpg",
      text:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      id: 2,
      name: "Anna johnson",
      job: "UI Web Designer",
      img:
        "img/test-2.jpg",
      text:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    },
    {
      id: 3,
      name: "Peter jones",
      job: "Front-End Developer",
      img:
        "img/test-3.jpg",
      text:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.",
    },
  ];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const desc = document.getElementById('desc');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  desc.textContent =item.text;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  desc.textContent =item.text;
};

nextBtn.addEventListener("click", function() {
  currentItem++;
  if (currentItem > reviews.length -1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length -1;
  }
  showPerson(currentItem);
});