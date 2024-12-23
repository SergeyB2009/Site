const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main__list')


document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone')

    // Обработчик события для фокуса на поле ввода
    phoneInput.addEventListener('focus', function () {
        if (this.value === '') {
            this.value = '+7 ' // Добавляем префикс +7 при фокусировке
        }
    })

    phoneInput.addEventListener('input', function () {
        // Удаляем все символы, кроме цифр
        let value = this.value.replace(/\D/g, '')

        // Удаляем префикс +7, если он есть
        if (value.startsWith('7')) {
            value = value.slice(1)
        }

        // Применяем маску
        if (value.length > 10) {
            value = value.slice(0, 10) // Ограничиваем до 10 цифр
        }

        // Форматируем номер
        let formattedValue = '+7 '
        if (value.length > 0) {
            formattedValue += '(' + value.substring(0, 3)
        }
        if (value.length >= 4) {
            formattedValue += ') ' + value.substring(3, 6)
        }
        if (value.length >= 7) {
            formattedValue += '-' + value.substring(6, 10)
        }

        this.value = formattedValue
    })
})

const menuButton = document.querySelector('.header-burger')
const sidebar = document.getElementById('sidebar')
const closeButton = document.getElementById('closeBtn')

menuButton.addEventListener('click', function () {
    sidebar.classList.toggle('active')
})

closeButton.addEventListener('click', function () {
    sidebar.classList.remove('active')
})

const loginBtn = document.getElementById('loginBtn')
const registerBtn = document.getElementById('registerBtn')
const loginModal = document.getElementById('myModal')
const registerModal = document.getElementById('registerModal')
const closeLogin = document.getElementById('closeLogin')
const closeRegister = document.getElementById('closeRegister')
const loginForm = document.getElementById('loginForm')
const registerForm = document.getElementById('registerForm')


// Открытие модального окна для входа
loginBtn.onclick = function () {
    loginModal.style.display = 'block'
}



// Открытие модального окна для регистрации
registerBtn.onclick = function () {
    registerModal.style.display = 'block'
}

// Закрытие модального окна для входа
closeLogin.onclick = function () {
    loginModal.style.display = 'none'
    resetForm(loginForm) // Сбрасываем форму входа
}

// Закрытие модального окна для регистрации
closeRegister.onclick = function () {
    registerModal.style.display = 'none'
    resetForm(registerForm) // Сбрасываем форму регистрации
}


// Закрытие модальных окон при клике вне их области
window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none'
        resetForm(loginForm) // Сбрасываем форму входа
    }
    if (event.target == registerModal) {
        registerModal.style.display = 'none'
        resetForm(registerForm) // Сбрасываем форму регистрации
    }

}

// Функция сброса формы
function resetForm(form) {
    form.reset() // Сбрасываем значения всех полей формы
}

const cardArray = [
    {
        id: 0,
        title: 'Щит электрический бытовой 380 Вольт с автоматикой (Для частных домов)',
        price: '60.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит1.jpg'


    },
    {
        id: 1,
        title: 'Щит электрический бытовой 380 Вольт (Для частных домов)',
        price: '61.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит2.jpg'
    },
    {
        id: 2,
        title: 'Щит электрический бытовой 380 Вольт (Для частных домов)',
        price: '62.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит3.jpg'

    },
    {
        id: 3,
        title: 'Щит электрический бытовой 220 Вольт (Для квартир) ',
        price: '63.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит4.jpg'

    },
    {
        id: 4,
        title: 'Щит электрический бытовой 220 Вольт (Для квартир)',
        price: '64.000 Р',

        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит5.jpg'

    },
    {
        id: 5,
        title: 'Щит электрический бытовой 380 Вольт с автоматикой (Для частных домов)',
        price: '65.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит6.jpg'

    },
    {
        id: 6,
        title: 'Щит электрический бытовой 380 Вольт (Для частных домов)',
        price: '65.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит7.jpg'

    },
    {
        id: 7,
        title: 'Щит электрический бытовой 380 Вольт (Для частных домов)',
        price: '65.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит8.jpg'

    },
    {
        id: 8,
        title: 'Щит электрический бытовой 380 Вольт (Для частных домов)',
        price: '65.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит9.jpg'

    }
]




const render = cardList => {
    cardWrapper.innerHTML = ''
    const noResultsMessage = document.getElementById('noResultsMessage')

    if (cardList.length === 0) {
        noResultsMessage.style.display = 'block' // Показываем сообщение
    } else {
        noResultsMessage.style.display = 'none' // Скрываем сообщение
        cardList.forEach(item => {
            cardWrapper.insertAdjacentHTML(
                'beforeend',
                `
                <a href="product.html" class="content-main__list-item">
                    <div class="content-main__list-item--img">
                        <img src="${item.img}" style="width: 100%;" alt="${item.title}">
                    </div>
                    <h5 class="content-main__list-item--title">
                        ${item.title}
                    </h5>
                    <strong class="content-main__list-item--price">${item.price}</strong>

                    <div class="content-main__list-item--desk-box">
                        <span class="content-main__list-item--desk">
                            ${item.address}
                        </span>
                        <span class="content-main__list-item--desk">
                            ${item.date}
                        </span>
                    </div>
                </a>
                `
            )
        })
    }
}



const filtredArray = (array, value) => {
    console.log(array)
    console.log(value)

    return array.filter(item => {
        return item.title.includes(value)
    })
}

cardWrapper.style.justifyContent = `flex-start`
cardWrapper.style.gap = `30px`

render(cardArray)


searchInput.addEventListener('input', () => {
    render(filtredArray(cardArray, searchInput.value))
})
