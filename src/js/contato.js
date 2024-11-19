document.getElementById('contatoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const telefoneError = document.getElementById('telefoneError');
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    telefoneError.style.display = 'none';
    let isValid = true;
    if (nome === '') {
        nameError.textContent = 'O nome é obrigatório.';
        nameError.style.display = 'block';
        isValid = false;
    } else if (nome.length < 3) {
        nameError.textContent = 'O nome deve ter pelo menos 3 caracteres.';
        nameError.style.display = 'block';
        isValid = false;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        emailError.textContent = 'O e-mail é obrigatório.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Insira um e-mail válido.';
        emailError.style.display = 'block';
        isValid = false;
    }
    if (numero === '') {
        telefoneError.textContent = 'O telefone é obrigatório.';
        telefoneError.style.display = 'block';
        isValid = false;
    } else if (numero.length < 10 || numero.length > 11) {
        telefoneError.textContent = 'O telefone deve ter entre 10 e 11 dígitos.';
        telefoneError.style.display = 'block';
        isValid = false;
    }
    if (isValid) {
        alert('Contato registrado! \nVocê receberá um e-mail com mais informações!');
        window.location.href = "index.html";
    }
});

