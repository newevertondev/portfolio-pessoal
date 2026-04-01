    function enviarWhats(event) {
         event.preventDefault();

        const nome = document.getElementById ('nome').value;
        const mensagem = document.getElementById('mensagem').value;
        const telefone = '5534999985714'

        const texto = `Olá! Me chamo ${nome}, ${mensagem}`
        const msgFormatada = encodeURIComponent (texto)

        const url = `https://wa.me/${telefone}/?text=${msgFormatada}`

        window.open(url, '_blank')

        console.log(url)
    }    

    document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
    });

