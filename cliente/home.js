// Mostrar modal de login
document.getElementById("loginBtn").addEventListener("click", () => {
  document.getElementById("loginModal").style.display = "flex";
});

// Mostrar modal de registro
document.getElementById("abrirRegistro").addEventListener("click", () => {
  document.getElementById("registerModal").style.display = "flex";
});

// Cerrar modales
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Registro de usuario
document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.find(u => u.email === email)) {
    alert("Este correo ya está registrado.");
    return;
  }

  usuarios.push({ nombre, apellido, telefono, email, password });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("¡Registro exitoso!");
  closeModal("registerModal");
  event.target.reset();
});

// Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("loginNombre").value.trim();
  const password = document.getElementById("loginPassword").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find(u => u.nombre === nombre && u.password === password);

  if (usuario) {
    alert(`Bienvenido, ${usuario.nombre}!`);
    sessionStorage.setItem("usuarioActivo", JSON.stringify(usuario));
    closeModal("loginModal");
    event.target.reset();
  } else {
    alert("Nombre o contraseña incorrectos.");
  }
});
