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
// 1. FUNÇÕES DE ANIMAÇÃO
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

const botoes = document.querySelectorAll(".titulos-sobre button");
const conteudos = document.querySelectorAll(".conteudo")

botoes.forEach(botao => {

    botao.addEventListener("click", () => {
        const tab = botao.dataset.tab;

        botoes.forEach(btn => {
            btn.classList.remove("active");
        });

        conteudos.forEach(conteudo => {
            conteudo.classList.remove("active");
        });

        botao.classList.add("active");
        document.getElementById(tab).classList.add("active");
    });
});

// ==========================================
// 2. DICIONÁRIO DE TRADUÇÕES
// ==========================================
const traducoes = {
    "pt-br": {
        about: "Sobre",
        projects: "Projetos",
        contacts: "Contato",
        titulo: "Olá, eu sou o <span class='nome'>Gabriel Brito</span>",
        descricao: "Desenvolvedor Front-end em formação,<br> estudante de Engenharia de Software.",
        linkProjetos: "➔ Meus Projetos",
        idiomaButton: "EN",
        tituloSobre: "Sobre Mim",
        tituloObjetivo: "Objetivos",
        sobreTexto: `Olá, eu sou Gabriel, mas também sou conhecido como Bat4ta. Sou estudante de Engenharia de Software e tenho grande interesse por tecnologia e desenvolvimento.
        
        Meu principal foco é o Front-End, área em que gosto de transformar ideias em interfaces funcionais, responsivas e visualmente interessantes. Também tenho explorado o desenvolvimento Full Stack para ampliar meus conhecimentos e entender melhor todas as etapas de uma aplicação.
        
        Gosto de aprender colocando a mão na massa, criando projetos e experimentando diferentes tecnologias. Acredito que cada projeto é uma oportunidade de aprender algo novo e evoluir tanto tecnicamente quanto pessoalmente.`,
        objetivoTexto: `Meu objetivo é continuar evoluindo como desenvolvedor e construir uma base sólida na área de tecnologia. 
        
        Quero aprofundar meus conhecimentos em desenvolvimento Front-End, enquanto continuo explorando outras áreas do desenvolvimento de software. Busco constantemente transformar o que aprendo em projetos reais, melhorar minha capacidade de resolver problemas e desenvolver aplicações cada vez mais completas, acessíveis e bem estruturadas.
        
        Mais do que apenas aprender novas tecnologias, quero entender como utilizá-las para criar experiências que realmente façam sentido para as pessoas.`,
    },
    "en": {
        about: "About",
        projects: "Projects",
        contacts: "Contacts",
        titulo: "Hello, I'm <span class='nome'>Gabriel Brito</span>",
        descricao: "Front-end Developer in training,<br> Software Engineering student.",
        linkProjetos: "➔ My Projects",
        idiomaButton: "PT-BR",
        tituloSobre: "About Me",
        tituloObjetivo: "My Goals",
        sobreTexto: `Hi, I'm Gabriel, but I'm also known as Bat4ta. I'm a Software Engineering student with a strong interest in technology and software development.
        
        My main focus is Front-End development, where I enjoy turning ideas into functional, responsive, and visually engaging interfaces. I'm also exploring Full Stack development to expand my knowledge and better understand the different stages of building an application. 
        
        I enjoy learning by getting hands-on, creating projects, and experimenting with different technologies. I believe every project is an opportunity to learn something new and grow both technically and personally.`,
        objetivoTexto: `My goal is to keep growing as a developer and build a strong foundation in technology.

        I want to deepen my knowledge of Front-End development while continuing to explore other areas of software development.
        
        I constantly try to turn what I learn into real projects, improve my problem-solving skills, and build applications that are increasingly complete, accessible, and well-structured.
        
        More than simply learning new technologies, I want to understand how to use them to create experiences that are meaningful and useful to people.`,
    }
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
    document.getElementById("tituloSobre").textContent=
    traducoes[idiomaAtual].tituloSobre;
    document.getElementById("tituloObjetivo").textContent=
    traducoes[idiomaAtual].tituloObjetivo;
    document.getElementById("sobreTexto").textContent=
    traducoes[idiomaAtual].sobreTexto;
    document.getElementById("objetivoTexto").textContent=
    traducoes[idiomaAtual].objetivoTexto;
    
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
