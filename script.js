const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnCloseModal=document.querySelector(".close-modal")
const btnOpenModal=document.querySelectorAll(".show-modal")
btnOpenModal.forEach(item=>item.addEventListener("click",toggleHidden))
btnCloseModal.addEventListener("click",toggleHidden) 
overlay.addEventListener('click',toggleHidden)
document.addEventListener("keydown",function(event){
 
  if(event.key=="Escape"){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
  }
})

function toggleHidden(){
    modal.classList.toggle("hidden")
    overlay.classList.toggle("hidden")
}