const btn = document.querySelector('button')
const popupWrapper = document.querySelector('.wrapper')


btn.addEventListener('click', event => {
    popupWrapper.style.display = 'block'
})

popupWrapper.addEventListener('click', event => {
    const clickedElement = event.target.classList[0]
    const classNames = ['close', 'wrapper', 'saiba-mais']
    const closePopup = classNames.some(className => className === clickedElement)

    if (closePopup) {
        popupWrapper.style.display = 'none'
    }
})
