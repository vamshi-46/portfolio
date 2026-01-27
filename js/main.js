const toggle=document.getElementById("themeToggle")
toggle.onclick=()=>{
document.body.classList.toggle("light")
toggle.textContent=document.body.classList.contains("light")?"🌞":"🌙"
}

const images=document.querySelectorAll(".gallery-item img")
const lightbox=document.getElementById("lightbox")
const lightboxImg=document.getElementById("lightbox-img")

images.forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex"
lightboxImg.src=img.src
}
})

lightbox.onclick=()=>{
lightbox.style.display="none"
}
