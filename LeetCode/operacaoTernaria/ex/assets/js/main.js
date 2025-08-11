const ps = document.querySelectorAll('p');
const h1s = document.querySelectorAll('h1');

for (let p of ps){
    p.addEventListener('click', () => {
        p.style.backgroundColor = p.style.backgroundColor === 'gray' ? '' : 'gray';
    })
}

for (let h1 of h1s){
    h1.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}

