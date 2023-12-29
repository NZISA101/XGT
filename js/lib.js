const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

// var itemDisplay = 0;
// var margin = 0;
//  if (screen.width > 990) {
//             itemDisplay = document.getElementsByClassName("product-container")[0].getAttribute("item-display-d");
//             margin = itemDisplay * 5;
//         }

// if (screen.width > 700 && screen.width < 990) {
//             itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
//             margin = itemDisplay * 6.8;
//         }
//         if (screen.width > 280 && screen.width < 700) {
//             itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
//             margin = itemDisplay * 20;
//         }





productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})