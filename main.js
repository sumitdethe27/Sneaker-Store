const wrapper=document.querySelector(".sliderWrapper");



const menuitems=document.querySelectorAll(".menuItem");
const products=[
    {
        id:1,
        title:"Air Force",
        price:179.99,
        colors:[
            {
                code:"black",
                img:'./img/air.png',
            },
            {
                code:"dark blue",
                img:'./img/air2.png',
            },
        ],

    },
    {
        id:2,
        title:"Jordan",
        price:199.99,
        colors:[
            {
                code:"lightgray",
                img:'./img/jordan.png',
            },
            {
                code:"green",
                img:'./img/jordan2.png',
            },
        ],
        
    },
    {
        id:3,
        title:"Blazer",
        price:189.99,
        colors:[
            {
                code:"lightgray",
                img:'./img/blazer.png',
            },
            {
                code:"green",
                img:'./img/blazer2.png',
            },
        ],
        
    },
    {
        id:4,
        title:"Crater",
        price:128.99,
        colors:[
            {
                code:"black",
                img:'./img/crater.png',
            },
            {
                code:"gray",
                img:'./img/crater2.png',
            },
        ],
        
    },
    {
        id:5,
        title:"Hippie",
        price:109.99,
        colors:[
            {
                code:"gray",
                img:'./img/hippie.png',
            },
            {
                code:"black",
                img:'./img/hippie2.png',
            },
        ],
        
    }
      
    
];

const pImg=document.querySelector(".productImg");
const pTitle=document.querySelector(".productTitle");
const pPrice=document.querySelector(".productPrice");
const PColor=document.querySelectorAll(".color");
const PSize=document.querySelectorAll(".size");
           
let chosenProduct=products[0];
    menuitems.forEach((item,indx)=>{
       
        item.addEventListener("click",()=>{
            // change the slide
            wrapper.style.transform=`translateX(${indx*-100}vw)`;
            
            // change the product menu
            chosenProduct=products[indx]
            // changing its title
            pTitle.textContent=chosenProduct.title
            // changing Price
            pPrice.textContent=`$ ${chosenProduct.price}`
            
            // changing img
            pImg.src=chosenProduct.colors[0].img
            // changing color option
            console.log(PColor)
            PColor.forEach((ele,ind)=>{
                ele.style.backgroundColor=chosenProduct.colors[ind].code
            })
        })
    });

    PColor.forEach((color,index)=>{
        // console.log(color)
        color.addEventListener("click",()=>{
            pImg.src=chosenProduct.colors[index].img
        })
    })
    PSize.forEach((size,index)=>{
        size.addEventListener("click",()=>{
           PSize.forEach((size)=>{
                size.style.backgroundColor="white";
                size.style.color="black";
                    
            }) ;
            size.style.backgroundColor="black";
            size.style.color="white";
            
        })
        
    })

    const buybtn=document.querySelector(".productBtn");
    const payment=document.querySelector(".payment");
    const closeBtn=document.querySelector(".close")
       
    buybtn.addEventListener("click",()=>{
        
         
        payment.style.display="flex";
    })
    closeBtn.addEventListener("click",()=>{
        console.log("hihis")
        payment.style.display="none";
    })