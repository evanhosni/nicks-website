////////////////////////////////TABS

var navLinks = document.querySelectorAll(".nav-link")
var sections = document.querySelectorAll(".section")

navLinks.forEach(navLink => {
    navLink.addEventListener('click', hideContent)
});
sections.forEach(section => {
    section.classList.add("hidden")
})

function hideContent(e) {
    navLinks.forEach(navLink => {
        navLink.classList.remove("active")
    })
    sections.forEach(section => {
        section.classList.add("hidden")
    })
    if (e) {
        showContent(document.querySelector("#" + (e.target.id).split("-").pop()))
    }
}

function showContent(e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector("#link-" + e.id).classList.add("active")
    e.classList.remove("hidden")
}

showContent(document.querySelector("#home"))


////////////////////////////////MODALS

var body = document.querySelector('#body-index')
var articleLinks = document.querySelectorAll(".a")
var iframe = document.querySelector('#iframe')
var modal = document.querySelector('#modal')
var closeX = document.querySelector('#close')
var newtab = document.querySelector('#newtab')

articleLinks.forEach(articleLink => {
    articleLink.addEventListener('click', (e) => {
        var link = e.target.getAttribute('href')
        iframe.src = "./" + link
        modal.style.display = "flex"
        body.style.overflow = "hidden"
    })
})

modal.addEventListener('click', (e) => {
    if (e.target.id !== "icons") hideModal()
})
closeX.addEventListener('click', hideModal)

function hideModal() {
    modal.style.display = "none"
    body.style.overflow = "visible"
}

newtab.addEventListener('click', () => {
    window.open(iframe.src, '_blank')
})