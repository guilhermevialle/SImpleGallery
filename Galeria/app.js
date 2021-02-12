const imgAtual = document.getElementById('imgAtual')

const imgs = [
    {
        name: 'Lofi 1',
        path: "/img/1.jpg"
    },
    {
        name: 'Lofi 2',
        path: "/img/2.jpg"
    },
    {
        name: 'Lofi 3',
        path: "/img/3.jpg"
    },
    {
        name: 'Lofi 4',
        path: "/img/4.jpg"
    },
    {
        name: 'Lofi 5',
        path: "/img/5.jpg"
    },
    {
        name: 'Lofi 6',
        path: "/img/6.jpg"
    },
    {
        name: 'Lofi 7',
        path: "/img/7.jpg"
    }
]

const prev = document.getElementById('seta1')
const next = document.getElementById('seta2')

const imgMiniatura = document.querySelectorAll('#imgMiniatura')
const nomeDaImg = document.getElementById('nomeDaImg')

// percorrer array

var mainArray = 0

// funcao incial 
const infosIniciais = (item, indice) => {
    imgAtual.src = item.path
    nomeDaImg.textContent = item.name
}

imgs.forEach(infosIniciais)

// colocar img 
imgMiniatura.forEach((item, indice) => {

    const verfiyScale = () => {

        imgMiniatura.forEach((newItem) => {
            if (newItem.style.transform == 'scale(1.2, 1.2)') {
                newItem.style = 'none'
            }
            if (newItem == imgMiniatura[0] || newItem == imgMiniatura[imgMiniatura.length - 1]) {
                if (newItem.style.borderBottomLeftRadius != '35px' || newItem.style.borderBottomRightRadius != '35px') {
                    imgMiniatura[0].style.borderBottomLeftRadius = '35px'
                    imgMiniatura[imgMiniatura.length - 1].style.borderBottomRightRadius = '35px'
                }
            }
        })
        
        imgAtual.src = item.src
        nomeDaImg.textContent = item.dataset.name
        item.style.transform = 'scale(1.2, 1.2)'
        mainArray = indice
    }

    item.addEventListener('click',verfiyScale,false)
})

// funcoes de proximo e anterior
function nextImage() {
    if (mainArray > imgs.length) {
        mainArray = imgs.length - 1
    }
    else {
        mainArray += 1
        imgAtual.src = imgs[mainArray].path
        imgMiniatura[mainArray].style.transform = 'scale(1.2, 1.2)'
        nomeDaImg.textContent = imgs[mainArray].name
    }
    if (imgMiniatura[mainArray - 1].style.transform == 'scale(1.2, 1.2)') {
        imgMiniatura[mainArray - 1].style.transform = 'none'
    }
}

function prevImage() {

    if (mainArray < 0) {
        mainArray = 0
        return;
    }
    else {
        mainArray -= 1
        imgAtual.src = imgs[mainArray].path
        imgMiniatura[mainArray].style.transform = 'scale(1.2, 1.2)'
        nomeDaImg.textContent = imgs[mainArray].name

    }
    if (imgMiniatura[mainArray + 1].style.transform == 'scale(1.2, 1.2)') {
        imgMiniatura[mainArray + 1].style.transform = 'none'
    }
}

next.addEventListener('click', nextImage, false)
prev.addEventListener('click', prevImage, false)

imgAtual.src = imgs[0].path
nomeDaImg.textContent = imgs[0].name
imgMiniatura[0].style.transform = 'scale(1.2, 1.2)'

// bordas bonitinhas 
imgMiniatura[0].style.borderBottomLeftRadius = '35px'
imgMiniatura[imgMiniatura.length - 1].style.borderBottomRightRadius = '35px'

// onload animation 
const boxAll = document.getElementById('boxAll')
const body = document.querySelector('body')

const fadeAnimation = () => {
    boxAll.style.transform = 'translateY(0)'
    boxAll.style.opacity = 1
}
