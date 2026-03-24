    (function() {
      const frases = [
        "Criando posts para marcas que querem destaque.",
        "Design que conecta, inspira e vende.",
        "Transformando ideias em presença digital.",
        "Sua marca, mais forte todos os dias.",
        "Design estratégico para mídias sociais.","Estética, estratégia e criativade em um só lugar."
      ];

      const subtituloEl = document.getElementById("subtitleHome");
      const DURACAO_FADE_MS = 500;
      const INTERVALO_MS = 3000;    

      let index = 0;
      let timer = null;

      function mostrarProximaFrase() {
        subtituloEl.classList.remove("show");
        setTimeout(() => {
          subtituloEl.textContent = frases[index];
          requestAnimationFrame(() => subtituloEl.classList.add("show"));
          index = (index + 1) % frases.length;
        }, DURACAO_FADE_MS);
      }
      subtituloEl.textContent = frases[index];
      index = (index + 1) % frases.length;
      subtituloEl.classList.add("show");

      timer = setInterval(mostrarProximaFrase, INTERVALO_MS);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          clearInterval(timer);
        } else {
          mostrarProximaFrase();
          timer = setInterval(mostrarProximaFrase, INTERVALO_MS);
        }
      });
    })();    
    
    
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

