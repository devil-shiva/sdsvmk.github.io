const hamIcon = document.getElementById("hamIcon");
const hamMenu = document.getElementById("hamMenu");
const menuItems = document.getElementsByClassName("navItem")
let c = 0;

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click',()=>{
        c=0;
        hamMenu.classList.remove("openNav");
        hamMenu.classList.add("closeNav");
    })
    
}

if(hamIcon !== undefined){
    hamIcon.addEventListener('click', ()=>{
        if(c==0){
            c=1;
            hamMenu.classList.remove("closeNav");
            hamMenu.classList.add("openNav");
        }else{
            c=0;
            hamMenu.classList.remove("openNav");
            hamMenu.classList.add("closeNav");
        }
    })
}


