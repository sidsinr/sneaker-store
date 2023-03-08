const wrapper = document.querySelector(".slider-wrapper");

const menuItems = document.querySelectorAll(".menu-item");

const product = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 119,
        desc: "The radiance lives on in the Air Force, the basketball original that\
         puts a fresh spin on what you know best: durably stitched overlays,\
         clean finishes and the perfect amount of flash to make you shine.",
        colors: [
            {
                code: "black",
                img: "img/air.png"
            },
            {
                code: "darkblue",
                img: "img/air2.png"
            }
        ]
    },
    {
        id: 2,
        title: "AIR JORDAN",
        price: 149,
        desc: "Clean and supreme, the AJ3 returns with all of its classic style and grace.\
         Quality leather in the upper—with that luxurious elephant print texture—is\
         combined with visible Air in the sole to make a comfortable, everyday icon.",
        colors: [
            {
                code: "lightgray",
                img: "img/jordan.png"
            },
            {
                code: "green",
                img: "img/jordan2.png"
            }
        ]
    },
    {
        id: 3,
        title: "BLAZER",
        price: 109,
        desc: "Being rooted doesn't mean you can't step forwards. Keeping the classic simplicity\
         and comfort you love, your favourite wardrobe staple gets remastered for the modern era.\
         Extra rubber extends from the midsole to the Swoosh for a bold twist. The patchwork upper adds the perfect amount of retro attitude.",
        colors: [
            {
                code: "lightgray",
                img: "img/blazer.png"
            },
            {
                code: "green",
                img: "img/blazer2.png"
            }
        ]
    },
    {
        id: 4,
        title: "CRATER",
        price: 129,
        desc: "Today's world brings choices. That's why we've decided to keep sustainability in mind\
         to create this running staple. The Crater Foam midsole feels like you're walking on clouds\
         while the upper lets you dress for the occasion.",
        colors: [
            {
                code: "black",
                img: "img/crater.png"
            },
            {
                code: "lightgray",
                img: "img/crater2.png"
            }
        ]
    },
    {
        id: 5,
        title: "HIPPIE",
        price: 99,
        desc: "Space Hippie is a story of trash transformed. From the upper to the outsole, at least\
         25% of the Space Hippie 04 is made from recycled material, by weight. Not only is it the most\
         lightweight silhouette within the collection, it also has the lowest carbon footprint.",
        colors: [
            {
                code: "gray",
                img: "img/hippie.png"
            },
            {
                code: "black",
                img: "img/hippie2.png"
            }
        ]
    }
];

let choosenProduct = product[0];

const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductDesc = document.querySelector(".product-desc");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

function productClick(i){
    // to change the slider wrapper
    wrapper.style.transform = `translateX(${-100*i}vw)`;

    // to change the choosen product
    choosenProduct = product[i];

    //to change the content of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductDesc.textContent = choosenProduct.desc;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assigning new colors and resetting active color
    document.querySelector(".color.active").className = "color";
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
        if(index==0){
            color.className = "color active";
        }
    });

    //resetting active size
    document.querySelector(".size.active").className = "size";
    document.querySelector(".size").className = "size active";
}

menuItems.forEach( (item, i) => {
    item.addEventListener("click", ()=>{productClick(i)});
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
        document.querySelector(".color.active").className = "color";
        color.className = "color active";
    });
});
currentProductSizes.forEach((size)=>{
    size.addEventListener("click", () => {
        document.querySelector(".size.active").className = "size";
        size.className = "size active";
    });
});

const productButton = document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const closeButton = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    payment.style.display = "none";
});

const fList = document.querySelectorAll(".footer-list");

for(let i=0; i<5; i++){
    fList[2].children[i].addEventListener("click",()=>{productClick(i)});
}