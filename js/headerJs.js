let nav_list_WOMEN = document.querySelector('.nav_list_WOMEN')
let nav_list_MEN = document.querySelector('.nav_list_MEN')
let nav_list_KIDS = document.querySelector('.nav_list_KIDS')
let nav_list_BABY = document.querySelector('.nav_list_BABY')

let WOMEN_list = document.querySelector('.WOMEN_list')
let MEN_list = document.querySelector('.MEN_list')
let kids_list = document.querySelector('.kids_list')
let BABY_list = document.querySelector('.BABY_list')




function headerFn() {
    nav_list_WOMEN.addEventListener('click', function (e) {
        console.log(e.target)
        console.log(e.target.textContent)
        console.log(WOMEN_list.attributes.class.nodeValue)
        WOMEN_list.classList.toggle('open')
        MEN_list.classList.remove('open')
        kids_list.classList.remove('open')
        BABY_list.classList.remove('open')

        nav_list_WOMEN.classList.toggle('on')
        nav_list_MEN.classList.remove('on')
        nav_list_KIDS.classList.remove('on')
        nav_list_BABY.classList.remove('on')
    })
    nav_list_MEN.addEventListener('click', function (e) {
        console.log(e.target)
        console.log(e.target.textContent)
        MEN_list.classList.toggle('open')
        WOMEN_list.classList.remove('open')
        kids_list.classList.remove('open')
        BABY_list.classList.remove('open')

        nav_list_WOMEN.classList.remove('on')
        nav_list_MEN.classList.toggle('on')
        nav_list_KIDS.classList.remove('on')
        nav_list_BABY.classList.remove('on')

    })
    nav_list_KIDS.addEventListener('click', function (e) {
        kids_list.classList.toggle('open')
        WOMEN_list.classList.remove('open')
        MEN_list.classList.remove('open')
        BABY_list.classList.remove('open')

        nav_list_WOMEN.classList.remove('on')
        nav_list_MEN.classList.remove('on')
        nav_list_KIDS.classList.toggle('on')
        nav_list_BABY.classList.remove('on')

    })
    nav_list_BABY.addEventListener('click', function (e) {
        BABY_list.classList.toggle('open')
        kids_list.classList.remove('open')
        WOMEN_list.classList.remove('open')
        MEN_list.classList.remove('open')

        nav_list_WOMEN.classList.remove('on')
        nav_list_MEN.classList.remove('on')
        nav_list_KIDS.classList.remove('on')
        nav_list_BABY.classList.toggle('on')


    })

}

headerFn();


