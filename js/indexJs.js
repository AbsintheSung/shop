window.onload=function(){
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
function textTitle(num) {
    // text_one_a.innerHTML = ''
    // text_one_b.innerHTML = ''
    if (num == 1) {
        text_one_a.innerHTML = '時尚高機能，就從春季開始'
        text_one_b.innerHTML = 'AIRism棉質美型抗UV連帽外套'
    }
    if (num == 2) {
        text_one_a.innerHTML = '耐髒防潑水 輕巧抗陽'
        text_one_b.innerHTML = '男女裝 可攜式抗UV 連帽外套'
    }
    if (num == 3) {
        text_one_a.innerHTML = '乾爽舒適 運動休閒都實穿'
        text_one_b.innerHTML = 'DRY-EX 短版圖領T恤'
    }
    if (num == 4) {
        text_one_a.innerHTML = '超彈性伸展 自在活動不設限'
        text_one_b.innerHTML = '男女童裝 特級彈性 ACTIVE 束口褲'
    }
}
function textTitle2(num) {
    if (num == 1) {
        text_two_a.innerHTML = '初夏魅力亞麻系列'
        text_two_b.innerHTML = "亞麻混紡外套<br>模特兒穿著之短褲台灣未販售"
    }
    if (num == 2) {
        text_two_a.innerHTML = '天然涼爽素材'
        text_two_b.innerHTML = "棉麻立領襯衫"
    }
    if (num == 3) {
        text_two_a.innerHTML = '輕盈優美自然系佯裝'
        text_two_b.innerHTML = '亞麻混紡抽褶洋裝'
    }
    if (num == 4) {
        text_two_a.innerHTML = '人氣素材 營造好感穿搭'
        text_two_b.innerHTML = '亞麻混紡短褲/長褲'
    }
}
function photo() {
    arrowLeft.addEventListener('click', leftFn)
    arrowRight.addEventListener('click', rightFn)
    arrowLeft2.addEventListener('click', leftFn2)
    arrowRight2.addEventListener('click', rightFn2)
    let photoIndex = 1;
    let photoIndex2 = 1;

    function leftFn() {
        photoIndex = photoIndex - 1
        if (photoIndex < 1) {
            photoIndex = 4
        }
        textTitle(photoIndex)

//        pictureImg1.style.backgroundImage = 'url("../img/L1' + photoIndex + '.jpg")'
        pictureImg1.style.backgroundImage = 'url("https://github.com/AbsintheSung/shop/raw/main/img/L1' + photoIndex + '.jpg")'
       
        console.log(pictureImg1.style.backgroundImage)

    }
    function rightFn() {
        photoIndex = photoIndex + 1
        if (photoIndex > 4) {
            photoIndex = 1
        }
        textTitle(photoIndex)
        // console.log(pictureImg1.style.backgroundImage = 'url("./L1_feature_02_0' + photoIndex + '_pc.jpg")')
 
//         pictureImg1.style.backgroundImage = 'url("../img/L1' + photoIndex + '.jpg")'
        pictureImg1.style.backgroundImage = 'url("https://github.com/AbsintheSung/shop/raw/main/img/L1' + photoIndex + '.jpg")'
        console.log(pictureImg1.style.backgroundImage)


    }
    function leftFn2() {
        photoIndex = photoIndex - 1
        if (photoIndex < 1) {
            photoIndex = 4
        }
        textTitle2(photoIndex)
//         pictureImg2.style.backgroundImage = 'url("../img/L2' + photoIndex + '.jpg")'
        pictureImg2.style.backgroundImage = 'url("https://github.com/AbsintheSung/shop/raw/main/img/L2' + photoIndex + '.jpg")'
        console.log(pictureImg2.style.backgroundImage)
    }
    function rightFn2() {
        photoIndex = photoIndex + 1
        if (photoIndex > 4) {
            photoIndex = 1
        }
        textTitle2(photoIndex)
pictureImg2.style.backgroundImage = 'url("https://github.com/AbsintheSung/shop/raw/main/img/L2' + photoIndex + '.jpg")'
  
        console.log(pictureImg2.style.backgroundImage)
    }

}
photo();
    }
