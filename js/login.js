let nav_list_WOMEN = document.querySelector('.nav_list_WOMEN')
let nav_list_MEN = document.querySelector('.nav_list_MEN')
let nav_list_KIDS = document.querySelector('.nav_list_KIDS')
let nav_list_BABY = document.querySelector('.nav_list_BABY')

let WOMEN_list = document.querySelector('.WOMEN_list')
let MEN_list = document.querySelector('.MEN_list')
let kids_list = document.querySelector('.kids_list')
let BABY_list = document.querySelector('.BABY_list')

let pictureImg1 = document.querySelector('.pictureImg1')
let arrowLeft = document.querySelector('.arrowLeft')
let arrowRight = document.querySelector('.arrowRight')

let pictureImg2 = document.querySelector('.pictureImg2')
let arrowLeft2 = document.querySelector('.arrowLeft2')
let arrowRight2 = document.querySelector('.arrowRight2')

let text_one_a = document.querySelector('.text_one_a')
let text_one_b = document.querySelector('.text_one_b')
let textPicture = document.querySelector('.textPicture')
let textPicture2 = document.querySelector('.textPicture2')
let text_two_a = document.querySelector('.text_two_a')
let text_two_b = document.querySelector('.text_two_b')
let checkbox = document.querySelector('.checkbox')
let password = document.querySelector('.password')
let loginMain = document.querySelector('.loginMain')
let footer_block2 = document.querySelector('.footer_block2')


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

        if (WOMEN_list.attributes.class.nodeValue === "WOMEN_list open"
            || MEN_list.attributes.class.nodeValue === "MEN_list open"
            || kids_list.attributes.class.nodeValue === "kids_list open"
            || BABY_list.attributes.class.nodeValue === "BABY_list open") {

            loginMain.classList.add('on')
            footer_block2.classList.add('on')
        } else {
            loginMain.classList.remove('on')
            footer_block2.classList.remove('on')
        }
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

        if (WOMEN_list.attributes.class.nodeValue === "WOMEN_list open"
            || MEN_list.attributes.class.nodeValue === "MEN_list open"
            || kids_list.attributes.class.nodeValue === "kids_list open"
            || BABY_list.attributes.class.nodeValue === "BABY_list open") {

            loginMain.classList.add('on')
            footer_block2.classList.add('on')
        } else {
            loginMain.classList.remove('on')
            footer_block2.classList.remove('on')
        }

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

        if (WOMEN_list.attributes.class.nodeValue === "WOMEN_list open"
            || MEN_list.attributes.class.nodeValue === "MEN_list open"
            || kids_list.attributes.class.nodeValue === "kids_list open"
            || BABY_list.attributes.class.nodeValue === "BABY_list open") {

            loginMain.classList.add('on')
            footer_block2.classList.add('on')
        } else {
            loginMain.classList.remove('on')
            footer_block2.classList.remove('on')
        }

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

        if (WOMEN_list.attributes.class.nodeValue === "WOMEN_list open"
            || MEN_list.attributes.class.nodeValue === "MEN_list open"
            || kids_list.attributes.class.nodeValue === "kids_list open"
            || BABY_list.attributes.class.nodeValue === "BABY_list open") {

            loginMain.classList.add('on')
            footer_block2.classList.add('on')
        } else {
            loginMain.classList.remove('on')
            footer_block2.classList.remove('on')
        }


    })

}
function textTitle(num) {
    // text_one_a.innerHTML = ''
    // text_one_b.innerHTML = ''
    if (num == 1) {
        text_one_a.innerHTML = '????????????????????????????????????'
        text_one_b.innerHTML = 'AIRism???????????????UV????????????'
    }
    if (num == 2) {
        text_one_a.innerHTML = '??????????????? ????????????'
        text_one_b.innerHTML = '????????? ????????????UV ????????????'
    }
    if (num == 3) {
        text_one_a.innerHTML = '???????????? ?????????????????????'
        text_one_b.innerHTML = 'DRY-EX ????????????T???'
    }
    if (num == 4) {
        text_one_a.innerHTML = '??????????????? ?????????????????????'
        text_one_b.innerHTML = '???????????? ???????????? ACTIVE ?????????'
    }
}
function textTitle2(num) {
    if (num == 1) {
        text_two_a.innerHTML = '????????????????????????'
        text_two_b.innerHTML = "??????????????????<br>???????????????????????????????????????"
    }
    if (num == 2) {
        text_two_a.innerHTML = '??????????????????'
        text_two_b.innerHTML = "??????????????????"
    }
    if (num == 3) {
        text_two_a.innerHTML = '???????????????????????????'
        text_two_b.innerHTML = '????????????????????????'
    }
    if (num == 4) {
        text_two_a.innerHTML = '???????????? ??????????????????'
        text_two_b.innerHTML = '??????????????????/??????'
    }
}


/*login*/

// console.log(password.attributes.type.nodeValue)
// console.log(password.type)
checkbox.addEventListener('click', function (e) {
    console.log(this.checked)
    if (this.checked == true) {
        password.type = 'text'
    } else if (this.checked == false) {
        password.type = 'password'
    }
})

headerFn();


