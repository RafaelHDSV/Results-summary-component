let item = document.querySelectorAll('.item')
let titleItem = document.querySelectorAll('.item .title p')
let imageItem = document.querySelectorAll('.item .title img')
let scoreItem = document.querySelectorAll('.score')

function setData() {
    fetch('data.json').then((response) => {
        response.json().then((itens) => {
            for (let i = 0; i < item.length; i++) {
                item[i].style.backgroundColor = `hsl(${itens[i].color}, .1)`
                imageItem[i].src = itens[i].icon
                titleItem[i].innerHTML = itens[i].category
                titleItem[i].style.color = `hsl(${itens[i].color})`
                scoreItem[i].innerHTML = itens[i].score
            }
        })
    })
}

setData()