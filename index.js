const magnifierEl = document.querySelector(".magnifier");
const searchBarContainerEl = document.querySelector(".searchBarContainer");

magnifierEl.addEventListener("click", ()=>{
    searchBarContainerEl.classList.toggle("active");
});