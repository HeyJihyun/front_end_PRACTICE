import random from './getRandom'

const a = random();

console.log(a);

/* switch문 */
switch (a) {
  case 1 :
    console.log('a is 1');
    break;
  case 3 :
    console.log('a is 3');
    break;
  case 5 :
    console.log('a is 5');
    break;
  default :
    console.log('rest...');
}

/* if문 */
if (a === 0) {
  console.log('a is 0');
} else if (a === 2) {
  console.log('a is 2');
} else if (a === 4) {
  console.log('a is 4');
} else {
  console.log('rest...');
}

const ulEl = document.querySelector('ul');
/* for */
for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li');
  li.textContent = `list-${i + 1}`;
  if ((i+1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li);
}