//находим все кнопки меню
let navMainItem = document.querySelectorAll('.nav-main__item')
//находим все блоки с описанием(торговля, инвест, привлечение) - sectionInfo
let sectionInfo = document.querySelectorAll('.sectionInfo')
//находим все блоки с описанием(торговля, инвест, привлечение) - sectionInfo
let btnNav = document.querySelectorAll('.btn-nav')
//находим блок с кнопками
let navHeader = document.querySelector('.nav-header')


//функция спуска вниз по нажатию кнопки и раскрашивания соответ-го <nav-item>
let slideDown = (props) => {
  if (window.screen.width > 377) {
    let linkToMain = document.querySelectorAll('.linkToMain')
    for (var i = 0; i < linkToMain.length; i++) {
      linkToMain[i].click()
    }
    //задаем соответств. меню-item цвет границы, у остальных убираем
    for (var i = 0; i < navMainItem.length; i++) {
      navMainItem[i].style.borderBottom = 'none'
      navMainItem[i].style.color = 'black'
    }
    navMainItem[props].style.borderBottom = '3px solid #009e82'
    navMainItem[props].style.color = '#009e82'

    for (var i = 0; i < sectionInfo.length; i++) {
      sectionInfo[i].style.display = 'none'
    }
    sectionInfo[props].style.display = 'block'
  }
}


//функция определения - если хоть одна кнопка активна, то красить фон желтым, если нет, то не красить
let checkActiveButtons = () => {
  if (btnNav[0].classList.value == "btn-nav btn-nav--item1 btn-nav--item1-active" || btnNav[1].classList.value == "btn-nav btn-nav--item2 btn-nav--item2-active" || btnNav[2].classList.value == "btn-nav btn-nav--item3 btn-nav--item3-active") {
    let header = document.querySelector('header')
    header.classList.add('yellow-BG')
  }
  else {
    let header = document.querySelector('header')
    header.classList.remove('yellow-BG')
  }
}


//кнопка торговать
let buttonTrade = document.querySelector('.btn-nav--item1')
buttonTrade.addEventListener('click', function(){slideDown(0)})

//кнопка инвестировать
let buttonInvest = document.querySelector('.btn-nav--item2')
buttonInvest.addEventListener('click', function(){slideDown(1)})

//кнопка 'привлекать инвесторов'
let buttonCallInvestor = document.querySelector('.btn-nav--item3')
buttonCallInvestor.addEventListener('click', function(){slideDown(2)})

//добавляем стили при нажатии на сами кнопки меню
navMainItem[0].addEventListener('click', (ev) => {
  ev.preventDefault()
  slideDown(0)
})
navMainItem[1].addEventListener('click', (ev) => {
  ev.preventDefault()
  slideDown(1)
})
navMainItem[2].addEventListener('click', (ev) => {
  ev.preventDefault()
  slideDown(2)
})


//МОБИЛЬНЫЕ УСТРОЙСТВА
//отменяем переход по ссылке
let linkToMain = document.querySelectorAll('.linkToMain')

  for (var i = 0; i < linkToMain.length; i++) {
    if (window.screen.width <= 377) {
      linkToMain[i].addEventListener('click', function(ev) {
        ev.preventDefault()
      })
    }
  }

//функция переноса блока с описанием и открытия по нажатию блока
let replace = (numbSectInfo, NumbBtn) => {

  if (window.screen.width <= 377) {
      //переносим
      sectionInfo[numbSectInfo].classList.toggle('toggle-text')
      navHeader.insertBefore(sectionInfo[numbSectInfo], btnNav[NumbBtn])

      //Стилизуем
      //Стрелочка вверх-вниз при нажатии
      if (NumbBtn == 1) {
        let btn1 = document.querySelector('.btn-nav--item1')
        btn1.classList.toggle('btn-nav--item1-active')
      }
      else if (NumbBtn == 2) {
        let btn2 = document.querySelector('.btn-nav--item2')
        btn2.classList.toggle('btn-nav--item2-active')
      }

      checkActiveButtons()

      //текст и кнопка по левому краю + перекрашиваем фон в желтый (как на макете)
      sectionInfo[numbSectInfo].style.padding = '10px 0'
      sectionInfo[numbSectInfo].style.textAlign = 'left'

      let continueBtn = document.querySelectorAll('.continue-btn')
      for (var i = 0; i < continueBtn.length; i++) {
        continueBtn[i].style.margin = '0'
        continueBtn[i].style.marginBottom = '10px'
      }

      //появляется картика в каждом блоке
      let imgMobile = document.querySelectorAll('.hiddenImgMobile')
      for (var i = 0; i < imgMobile.length; i++) {
        imgMobile[i].classList.add('hiddenImgMobileActive')
      }
    }
}

//нажим на мобилках на кнопку - получаем описание
btnNav[0].addEventListener('click', function(){replace(0, 1)});
btnNav[1].addEventListener('click', function(){replace(1, 2)});

//отдельно для 3й кнопки (она не имеет после себя эл-в, before не применить)
btnNav[2].addEventListener('click', () => {
    if (window.screen.width <= 377) {
      //переносим
      sectionInfo[2].classList.toggle('toggle-text')
      navHeader.insertBefore(sectionInfo[2], btnNav[2].nextSibling)

      //текст и кнопка по левому краю
      sectionInfo[2].style.padding = '10px 0'
      sectionInfo[2].style.textAlign = 'left'

      let continueBtn = document.querySelectorAll('.continue-btn')
      for (var i = 0; i < continueBtn.length; i++) {
        continueBtn[i].style.margin = '0'
        continueBtn[i].style.marginBottom = '10px'
      }

      //появляется картика в каждом блоке
      let imgMobile = document.querySelectorAll('.hiddenImgMobile')
      for (var i = 0; i < imgMobile.length; i++) {
        imgMobile[i].classList.add('hiddenImgMobileActive')
      }

      //Стрелочка вверх-вниз при нажатии  + перекрашиваем фон в желтый (как на макете)
      if (btnNav[2]) {
        let btn3 = document.querySelector('.btn-nav--item3')
        btn3.classList.toggle('btn-nav--item3-active')

        checkActiveButtons()
        //let header = document.querySelector('header')
        //header.classList.toggle('yellow-BG')
      }

    }
});
