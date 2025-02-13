document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const name = form["name"].value.trim();
    const surname = form["surname"].value.trim();
    const email = form["email"].value.trim();
    const message = form["message"].value.trim();
    const alertBox = document.getElementById("alert");

    if (!name || !surname || !email || !message) {
        alertBox.className = "alert alert-danger";
        alertBox.innerHTML = "Por favor, preencha todos os campos obrigatórios.";
        alertBox.classList.remove("d-none");
    } else {
        alertBox.className = "alert alert-success";
        alertBox.innerHTML = "Formulário enviado com sucesso!";
        alertBox.classList.remove("d-none");
        form.reset();
    }
});