const toggle = document.getElementById('toggle');
const closeTab = document.getElementById('close')
const openTab = document.getElementById('open')
const modal = document.getElementById('modal')


toggle.addEventListener('click', function () {
    document.body.classList.toggle('show-nav')
})

openTab.addEventListener('click', function () {
    modal.classList.add('show-modal')
    console.log('hello')
})

closeTab.addEventListener('click', function () {
    modal.classList.remove('show-modal')
})

window.addEventListener('click', function (e) {
    e.target == modal ? modal.classList.remove('show-modal') : false
})