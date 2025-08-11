const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const h1s = document.querySelectorAll('h1');
const links = document.querySelectorAll('a');
const caixas = document.querySelectorAll('.caixa');
const psClick = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

for (let p of ps){
    console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.padding = '30px';
    p.style.margin = '0px';
    p.style.color = 'white';
};

for (let h of h1s){
    h.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    console.log(h.style.color); 
}

for (let link of links){
    link.textContent = `clique aqui`;
}

for (let caixa of caixas){
    caixa.style.border = '2px solid red';
}

for (let p of psClick){
    p.addEventListener('click', () => {
        p.style.backgroundColor = 
        p.style.backgroundColor === 'gray' ? backgroundColorBody : 'gray';
        
    })
}