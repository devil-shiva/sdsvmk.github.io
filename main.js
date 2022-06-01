const hamIcon = document.getElementById("hamIcon");
const hamMenu = document.getElementById("hamMenu");

let c = 0;
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
