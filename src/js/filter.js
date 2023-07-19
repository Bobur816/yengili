
const searchFormEl = document.querySelector('.search')
const cards = document.querySelector('.cards')

searchFormEl.search.addEventListener('input', () => {
    const searchValue = searchFormEl.search.value.toLowerCase()
    const cardsItem = document.querySelectorAll('.cards__item')
    const cardTitle = document.querySelectorAll('.cards__title')
    cardTitle.forEach((title, i) => {
        if (title.textContent.toLowerCase().includes(searchValue)) {
            cardsItem[i].style.display = 'block'
        } else {
            cardsItem[i].style.display = 'none'
        }
    })
})

const searchSelect = document.querySelectorAll('.search__select-list li')
const searchSelectSpan = document.querySelector('.search__select span')

import { createCountries } from "./updateUI"
import request from "./request"


searchSelect.forEach((list) => {
    list.addEventListener('click', () => {
        cards.textContent = ''
        searchSelectSpan.textContent = list.textContent
        let filterAPI


        if (list.textContent == 'All') {
            filterAPI = 'https://restcountries.com/v3.1/all'
        } else {
            filterAPI = `https://restcountries.com/v3.1/region/${list.textContent}`
        }

        request(filterAPI)
            .then((data) => {
                createCountries(data)
            })
            .catch((err) => {
                alert(err.message)
            })
    })

})