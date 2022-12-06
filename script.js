
let view = document.querySelector('#view h2');
const button = document.querySelectorAll('.button');

button.forEach(element__button => {
    clickToButton(element__button);
});

function clickToButton (element__button) {
    element__button.addEventListener('click', function () {
       
        if (this.textContent === '=') {
        if (view.textContent.search(/[^0-9/*+-.=]/g) !== -1)return;
            view.textContent = eval(view.textContent)
        } else if (this.textContent === 'Очистить') {
            view.textContent = '';
        } else { view.textContent += this.textContent }
        

        if (view.offsetWidth > 250 || view.textContent === 'Infinity' || view.textContent.charAt(0)==='*' || view.textContent.charAt(0)==='/') {
            view.textContent = 'ERROR';
            view.style.cssText = `letter-spacing: 15px;
            color: red;`;
            setTimeout(() => {
                view.textContent = '';
                view.style.color = '';
                view.style.cssText = '';
            }, 1000);
            
        };
    });
};

