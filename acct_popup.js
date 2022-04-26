const openGroom = document.querySelectorAll('[data-modal-target]')
const closeGroom = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openGroom.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector('.groom-part')
        openModal(modal)
    })
})

closeGroom.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.groom-part')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
