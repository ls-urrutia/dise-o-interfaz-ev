
const toast = document.querySelector('.toast')

formulario.addEventListener('submit', e => {

    e.preventDefault()


  


    btnEnviar.classList.add('d-none')
    btnCargando.classList.remove('d-none')

    window.setTimeout(() => {

        btnEnviar.classList.remove('d-none')
        btnCargando.classList.add('d-none')
        const eventoToast = new bootstrap.Toast(toast)
        eventoToast.show()

    },3000)



    formulario.reset()
})