const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-links');
const links = document.querySelectorAll('.menu-links a');
const imgMenu = document.querySelector('.menu-img');

// ==========================================
// 1. LÓGICA DO MENU
// ==========================================
menu.addEventListener('click', function(e){
    e.stopPropagation();
    menu.classList.toggle('active');
    
    menuLinks.forEach(link => {
        link.classList.toggle('active');
    });
    
    links.forEach(link => {
        link.classList.toggle('active');
    });

    if(imgMenu){
        imgMenu.classList.toggle('active');
    }
});

document.addEventListener('click', function(e){
    if(
        !menu.contains(e.target) &&
        !e.target.closest('.menu-links')
    ){
        menu.classList.remove('active');
        menuLinks.forEach(link => link.classList.remove('active'));
        links.forEach(link => link.classList.remove('active'));
        imgMenu.classList.remove('active');
    }
});

// ==========================================
// 1. DICIONÁRIO DE TRADUÇÕES
// ==========================================
const traducoes = {
    "pt-br": {
        about: "Sobre",
        projects: "Projetos",
        contacts: "Contato",
        titulo: "Olá, eu sou o <span class='nome'>Gabriel Brito</span>",
        descricao: "Desenvolvedor Front-end em formação,<br> estudante de Engenharia de Software.",
        linkProjetos: "➔ Meus Projetos",
        idiomaButton: "EN"
    },
    "en": {
        about: "About",
        projects: "Projects",
        contacts: "Contacts",
        titulo: "Hello, I'm <span class='nome'>Gabriel Brito</span>",
        descricao: "Front-end Developer in training,<br> Software Engineering student.",
        linkProjetos: "➔ My Projects",
        idiomaButton: "PT-BR"
    }
}

// ==========================================
// 2. FUNÇÕES DE ANIMAÇÃO
// ==========================================
function animarLetrasDoNome() {
    const nome = document.querySelector('.nome');
    if (!nome) return;

    nome.innerHTML = [...nome.textContent]
        .map((letra, index) => {
            if (letra === ' ') return ' ';
            return `<span style="animation-delay: ${index * 0.1}s">${letra}</span>`;
        })
        .join('');
}

function animarBotaoProjetos() {
    const btnProjetos = document.getElementById('linkProjetos');
    if (!btnProjetos) return;

    const texto = btnProjetos.textContent;

    btnProjetos.innerHTML = [...texto]
        .map((letra, index) => {
            if (letra === ' ') return '&nbsp;';
            return `<span style="animation-delay: ${index * 0.05}s">${letra}</span>`;
        })
        .join('');
}



// ==========================================
// 3. LÓGICA DE TROCA DE IDIOMA
// ==========================================
let idiomaAtual = "pt-br";
const btnIdioma = document.getElementById("idiomaButton");

btnIdioma.addEventListener("click", function() {
    idiomaAtual = idiomaAtual === "pt-br" ? "en" : "pt-br";

    document.getElementById("about").textContent = traducoes[idiomaAtual].about;
    document.getElementById("projects").textContent = traducoes[idiomaAtual].projects;
    document.getElementById("contacts").textContent = traducoes[idiomaAtual].contacts;
    document.getElementById("titulo").innerHTML = traducoes[idiomaAtual].titulo;
    document.getElementById("descricao").innerHTML = traducoes[idiomaAtual].descricao;
    document.getElementById("linkProjetos").textContent = traducoes[idiomaAtual].linkProjetos;
    document.getElementById("idiomaButton").textContent = traducoes[idiomaAtual].idiomaButton;

    animarLetrasDoNome();
    animarBotaoProjetos();
    animarMenu();
});

// ==========================================
// 4. INICIALIZAÇÃO
// ==========================================
animarLetrasDoNome();
animarBotaoProjetos();
animarMenu();