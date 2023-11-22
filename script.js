const wrapper = document.querySelector(".wrapper")
const loginLink = document.querySelector(".login-link")
const registerLink = document.querySelector(".register-link")
const btnPopup = document.querySelector(".btnLogin-popup")
const btnPopupp = document.querySelector(".btnLogin-popupp")
const iconClose = document.querySelector(".icon-close")

registerLink.addEventListener("click",()=>{
    wrapper.classList.add("active");
})

loginLink.addEventListener("click",()=>{
    wrapper.classList.remove("active");
})

btnPopup.addEventListener("click",()=>{
    wrapper.classList.add("active-popup");
})


iconClose.addEventListener("click",()=>{
    wrapper.classList.remove("active-popup");
})

btnPopupp.addEventListener("click",()=>{
    wrapper.classList.add("active-popup");
})


iconClose.addEventListener("click",()=>{
    wrapper.classList.remove("active-popupp");
})

const toggleBtn = document.querySelector(".gridicon");
const toggleBtnIcon = document.querySelector("#iconm");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")
    toggleBtnIcon.classList = isOpen
    ?"fa-solid fa-xmark"
    :"fa-solid fa-bars"
}