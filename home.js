document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('sliderTrack');
  if (track) {
    const images = track.innerHTML;
    track.innerHTML += images;
  }
});


document.addEventListener('DOMContentLoaded', () => {
  // 1. Duplicar imágenes para scroll infinito
  const track = document.getElementById('sliderTrack');
  if (track) {
    const images = track.innerHTML;
    track.innerHTML += images;
  }

  // 2. Mostrar modal de login
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const loginModal = document.getElementById("loginModal");
      if (loginModal) loginModal.style.display = "flex";
    });
  }

  // 3. Mostrar modal de registro
  const abrirRegistro = document.getElementById("abrirRegistro");
  if (abrirRegistro) {
    abrirRegistro.addEventListener("click", () => {
      const registerModal = document.getElementById("registerModal");
      if (registerModal) registerModal.style.display = "flex";
    });
  }

  // 4. Cerrar modales: esta función debe estar global para que onclick inline funcione
  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
  };

  // 5. Registro de usuario
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
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
  }

  // 6. Inicio de sesión
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
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
  }
});
