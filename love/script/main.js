'use strict';

$('.slider').slick({
    dots: true,
    slidesToShow: 3,
    centerMode: true,
    adaptiveHeight: true,
    draggable: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})



const pluses = document.querySelectorAll('.questions_open')


pluses.forEach(plus => {
    // Открытие контента и движение плюса
    plus.addEventListener('click', plus => {
        //Узнаём насколько plus повёрнут
        let transform = plus.target.style.getPropertyValue("transform")
        //Узнаём height контена
        let width = parseInt(getComputedStyle(plus.target.nextElementSibling).height)
        //Если он повёрнут
        if (transform.includes('45')) {
            plus.target.parentElement.style.cssText =
                `height: 36px;
            overflow: visible;`;
            plus.target.style.transform = 'rotate(0deg)'
        } else {
            //Увеличиваем контент на height
            plus.target.parentElement.style.cssText =
                `height: ${width + 60}px;
                overflow: visible;`;
            plus.target.style.transform = 'rotate(-45deg)'
        }

    })
})

//Modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
    phoneModalTrigger = document.querySelectorAll('[data-phonemodal]'),
    modal = document.querySelector('.modal'),
    phoneModal = document.querySelector('.phone_modal'),
    modalCloseBtn = document.querySelector('[data-close]')

console.log(modalCloseBtn);

phoneModalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        phoneModal.classList.add('show')
        phoneModal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    })

})

modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    })

})

phoneModal.addEventListener('click', e => {
    if (e.target === phoneModal) {
        closeModal(phoneModal)
    }
})

modal.addEventListener('click', e => {
    if (e.target === modal) {
        closeModal(modal)
    }
})

modalCloseBtn.addEventListener('click', closeModal)

modalCloseBtn.addEventListener('click', () => {
    closeModal(phoneModal)
})




document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal()
    }
})

function closeModal(modal) {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

