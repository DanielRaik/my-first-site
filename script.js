// Mensagem de boas=vindas no console
console.log("Bem-vindo ao meu site de apresentação!");

// Animação scrollar
function animarAoScroll() {
    const elementos = document.querySelectorAll('.animado');

    elementos.forEach ((el) => {
        const posicao = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            el.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animarAoScroll);

//navbar scrollar aparecer desaparecer
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
        //baixo
        navbar.style.top = "-80px"; 
        } else {
        //cima
        navbar.style.top = "0";
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});

//form msg
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const nome = document.getElementById("nome").value.trim ();
        const email = document.getElementById("email").value.trim ();
        const mensagem = document.getElementById("mensagem").value.trim ();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            e.preventDefault();
            return;
        }

        if (!email.includes("@")) {
            alert("E-mail inválido. Verifique se está escrito corretamente.");
            e.preventDefault();
            return;
        }
        
        //msg sucesso
        WebGLTransformFeedback.style.display = "block";

        //limpa os campos
        form.reset();

        //esconder msg 5 segundos
        setTimeout(() => {
            feedback.style.display = "none";
        }, 5000);
    });
});

// mostrar/ocultar botao scroll pag
document.addEventListener("DOMContentLoaded", function () {
    const botaoTopo= document.getElementById("btn-topo");

    window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

//voltar ao topo 
botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
});

//dark mode 
document.addEventListener("DOMContentLoaded", function () {
  const botaoModoEscuro = document.getElementById("modo-escuro");

  botaoModoEscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Altera o texto do botão
    if (document.body.classList.contains("dark-mode")) {
      botaoModoEscuro.textContent = "☀️ Modo Claro";
    } else {
      botaoModoEscuro.textContent = "🌙 Modo Escuro";
    }
  });
});