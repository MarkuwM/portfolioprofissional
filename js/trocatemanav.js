document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;
    const navbar = document.getElementById("navbar");
    const cards = document.querySelectorAll(".card");
    const formInputs = document.querySelectorAll(".form-control");
    const githubButtons = document.querySelectorAll(".btn-dark");  // Seleciona todos os botões com a classe .btn-dark

    //Verifica o tema salvo no localStorage
    let theme = localStorage.getItem("theme") || "light";
    applyTheme(theme);

    themeToggle.addEventListener("click", function () {
        theme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", theme);
        applyTheme(theme);
    });

    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("bg-dark", "text-light");
            body.classList.remove("bg-light", "text-dark");
            navbar.classList.add("bg-dark", "navbar-dark");
            navbar.classList.remove("bg-light", "navbar-light");
            themeIcon.classList.replace("bi-sun", "bi-moon"); // Ícone correto para o modo escuro

            //Cards ficam com a mesma cor do fundo (escuro)
            cards.forEach(card => {
                card.classList.add("bg-dark", "text-light", "border-light");
                card.classList.remove("bg-light", "text-dark", "border-dark");
            });

            //Campos do formulário brancos no modo escuro
            formInputs.forEach(input => {
                input.style.backgroundColor = "#ffffff"; // Branco
                input.style.color = "#000000"; // Texto preto para contraste
                input.classList.add("border-light");
                input.classList.remove("border-dark");
            });

            // Torna os botões "GitHub" vermelhos no modo escuro
            githubButtons.forEach(button => {
                button.style.backgroundColor = "red";  // Define o fundo do botão como vermelho
                button.style.color = "white";  // Define a cor do texto como branco para contraste
            });

        } else {
            body.classList.add("bg-light", "text-dark");
            body.classList.remove("bg-dark", "text-light");
            navbar.classList.add("bg-light", "navbar-light");
            navbar.classList.remove("bg-dark", "navbar-dark");
            themeIcon.classList.replace("bi-moon", "bi-sun"); // Ícone correto para o modo claro

            //Cards ficam com a mesma cor do fundo (claro)
            cards.forEach(card => {
                card.classList.add("bg-light", "text-dark", "border-dark");
                card.classList.remove("bg-dark", "text-light", "border-light");
            });

            //Campos do formulário mais claros no modo claro
            formInputs.forEach(input => {
                input.style.backgroundColor = "#f8f9fa"; // Cinza muito claro
                input.style.color = "#000000"; // Texto preto
                input.classList.add("border-dark");
                input.classList.remove("border-light");
            });

            // Restaura o estilo dos botões "GitHub" para o padrão no tema claro
            githubButtons.forEach(button => {
                button.style.backgroundColor = "";  // Reseta o fundo para o padrão
                button.style.color = "";  // Reseta a cor do texto para o padrão
            });
        }
    }
});
