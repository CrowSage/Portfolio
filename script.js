const navBtns = document.querySelectorAll(".navItem")
const sections = document.querySelectorAll(".section")

function navHandler(e) {
    navBtns.forEach(button => button.classList.remove("active"))
    e.currentTarget.classList.add("active")

    sections.forEach(section => section.classList.remove("active"))

    const target = e.currentTarget.dataset.section
    document.getElementById(target).classList.add("active")
}
// Cursor Glow Effect

const glow = document.querySelector(".cursorGlow")

window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px"
    glow.style.top = e.clientY + "px"

})
// Copying Mail

const copyBtn = document.getElementById("copyBtn")
const popup = document.getElementById("popup")

async function copyMail() {
    await navigator.clipboard.writeText("waliimran.dev@gmail.com")
    copyBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`

    popup.style.display = "flex"



    setTimeout(() => {

        copyBtn.innerHTML = `<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>`


        popup.style.display = "none"

    }, 2000)



}