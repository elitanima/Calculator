
let view = document.querySelector('#view h2');

const button = document.querySelectorAll('.button');

button.forEach(element__button => {
    clickToButton(element__button);
    // console.log(Number(element__button.textContent))
})

function clickToButton (element__button) {
    element__button.addEventListener('click', function (el) {
        el.preventDefault();
        if (this.textContent === '=') {
            view.textContent = eval(view.textContent)
        } else if (this.textContent === 'Очистить') {
            view.textContent = '';
        } else { view.textContent += this.textContent}
    })
}