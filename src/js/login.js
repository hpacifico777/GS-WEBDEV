const form = document.getElementById('loginForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            document.getElementById('usernameError').textContent = "";
            document.getElementById('passwordError').textContent = "";

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            let isValid = true;

            if (username === "") {
                document.getElementById('usernameError').textContent = "Por favor, insira o nome de usuário.";
                document.getElementById('usernameError').style.display = "block";
                isValid = false;
            }

            if (password === "") {
                document.getElementById('passwordError').textContent = "Por favor, insira a senha.";
                document.getElementById('passwordError').style.display = "block";
                isValid = false;
            } else if (password.length < 8) {
                document.getElementById('passwordError').textContent = "A senha deve ter pelo menos 8 caracteres.";
                document.getElementById('passwordError').style.display = "block";
                isValid = false;
            }

            if (isValid) {
                alert("Login realizado com sucesso!");
                window.location.href = "quiz.html";
            }
        });