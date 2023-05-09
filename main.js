const wrapper=document.querySelector(".sliderWrapper")

const menuitems=document.querySelectorAll(".menuItem")

menuitems.forEach((item,indx)=>{
item.addEventListener("click",()=>{
wrapper.style.transform=`translateX(${-100*indx}vw)`;                                
})
});