const imgBx = document.querySelectorAll(".panel");

imgBx.forEach((imgBxs)=>{
    imgBxs.addEventListener("click",()=>{
        removeActive();
        imgBxs.classList.add("active");
    });
});

removeActive = ()=>{
    imgBx.forEach((imgBxs)=>{
        imgBxs.classList.remove("active");
    });
};