const menuIcon = document.getElementById('menu');
const menuList = document.getElementById('smallScreenLinks');
const overlay = document.getElementById('overlay');
const closeMenuList = document.getElementById('close');
const cart = document.getElementById('cart');
const cartDetail = document.getElementById('cart-detail');
const preImage = document.getElementById('image-pre');
const moduleOverlay = document.getElementById('module-overlay');
const moduleImageSection = document.getElementById('module-imgesSection');
const moduleClose = document.getElementById('module-close');
const ImagesArray = document.querySelectorAll('.product-image');
const modulePre = document.getElementById('module-pre');
const moduleImageArray = document.querySelectorAll('.module-image');
const incrementProduct = document.getElementById('product-add');
const productNumber = document.getElementById('product-number');
const decrementProduct = document.getElementById('product-minus');
const addToCart = document.getElementById('add-to-cart');
const cartProductNo = document.getElementById('cart-product-no');
const cartCard = document.getElementById('cart-card');
const cartText = document.getElementById('cart-text');
const cardDelete = document.getElementById('cart-delete');
const cartImg = document.getElementById('cart-img');
const cartPriceNo = document.getElementById('cart-price-no');
const cartTotal = document.getElementById('cart-total');
const imageSlider=document.getElementById('image-pre')
let cartSwtich = false;
let isMenuOpen = false;
let isModuleOpen = false;
let productCount = 0;
let slideShowIndex=1;
menuIcon.addEventListener('click', function () {
    isMenuOpen = !isMenuOpen;
    isMenuOpen === false ? menuList.classList.remove('openMenu') : menuList.classList.add('openMenu');
    isMenuOpen === false ? overlay.classList.remove('overlay') : overlay.classList.add('overlay');
})
closeMenuList.addEventListener('click', function () {
    isMenuOpen = !isMenuOpen;
    isMenuOpen === false ? menuList.classList.remove('openMenu') : menuList.classList.add('openMenu');
    isMenuOpen === false ? overlay.classList.remove('overlay') : overlay.classList.add('overlay');
});
cart.addEventListener('click', function () {
    cartSwtich = !cartSwtich;
    cartSwtich === false ? cartDetail.style.display = 'none' : cartDetail.style.display = 'block'
})
preImage.addEventListener('click', function () {
    isModuleOpen = !isModuleOpen;
    isModuleOpen === false ? moduleImageSection.classList.remove('showModule') : moduleImageSection.classList.add('showModule');
    isModuleOpen === false ? moduleOverlay.classList.remove('showModuleOverlay') : moduleOverlay.classList.add('showModuleOverlay');
});
moduleClose.addEventListener('click', function () {
    isModuleOpen = !isModuleOpen;
    isModuleOpen === false ? moduleImageSection.classList.remove('showModule') : moduleImageSection.classList.add('showModule');
    isModuleOpen === false ? moduleOverlay.classList.remove('showModuleOverlay') : moduleOverlay.classList.add('showModuleOverlay');
})
ImagesArray.forEach(img => {
    img.addEventListener('click', function () {
        const src = img.getAttribute('src');
        preImage.src = src;
    });
});
moduleImageArray.forEach(img => {
    img.addEventListener('click', function () {
        const src = img.getAttribute('src');
        modulePre.src = src;
    });
});
incrementProduct.addEventListener('click', function () {
    productCount = productCount + 1;
    productNumber.innerText = productCount
})
decrementProduct.addEventListener('click', function () {
    console.log(productCount);
    if (productCount <= 0) {
        productCount = 0;
        productNumber.innerText = productCount;
    } else {
        productCount = productCount - 1;
        productNumber.innerText = productCount
    }

})
addToCart.addEventListener('click', function () {
    if (productCount <= 0) {
        cartProductNo.style.display = 'none';
        cartText.style.display = 'block';
        cartCard.style.display = 'none';
    }
    else {
        cartProductNo.style.display = 'flex';
        cartText.style.display = 'none';
        cartCard.style.display = 'flex'
        cartProductNo.innerHTML = productCount;
        cartImg.src = preImage.src;
        cartPriceNo.innerText = productCount;
        cartTotal.innerText = 125 * productCount
    }
    productCount = 0
    productNumber.innerText = 0;
});
cardDelete.addEventListener('click', function () {
    cartText.style.display = 'block';
    cartCard.style.display = 'none';
    cartProductNo.style.display='none'
});
function showslides(index,string) {
    if (index < 1) {
        slideShowIndex = ImagesArray.length;
    } else if (index > ImagesArray.length) {
        slideShowIndex = 1;
    } else {
        slideShowIndex = index;
    }
    const src = ImagesArray[slideShowIndex - 1].getAttribute('src');
    string==='module'? modulePre.src=src: imageSlider.src = src;
}

function previous(string) {
    showslides(slideShowIndex - 1,string);
}

function nextSlides(string) {
    showslides(slideShowIndex + 1,string);
}

showslides(slideShowIndex);
