const usuarios = [
    { usuario: "admin", contraseña: "Colombia1" },
    { usuario: "prueba", contraseña: "enero2026" },
    // Usuarios Operativos
    { usuario: "bastilla", contraseña: "colombia1" },
    { usuario: "itagui", contraseña: "colombia1" },
    { usuario: "acevedo", contraseña: "colombia1" },
    { usuario: "cartagena", contraseña: "colombia1" },
    { usuario: "parqueadero", contraseña: "colombia1" },
    
    { usuario: "envigado", contraseña: "colombia1" },
    { usuario: "belen", contraseña: "colombia1" }
   
];

// Función para manejar el ingreso del usuario
function ingresar() {
    let usuarioInput = document.getElementById("usuario").value.trim();
    let contraseñaInput = document.getElementById("contraseña").value.trim();
    // Verificación de usuario y contraseña
    const usuarioValido = usuarios.find(
        (user) => user.usuario === usuarioInput && user.contraseña === contraseñaInput
    );
    if (usuarioValido) {
        // Almacena la sesión en sessionStorage
        sessionStorage.setItem("autenticado", "true");
        // Redirige a la página principal
        window.location.href = "./pagina_principal.html";
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Contraseña o usuario incorrecto"
        });
    }
}
// Verificación de usuario y contraseña
const usuarioValido = usuarios.find(
    (user) => user.usuario === usuarioInput && user.contraseña === contraseñaInput
);
if (usuarioValido) {
    // Almacena la sesión en sessionStorage
    sessionStorage.setItem("autenticado", "true");
    // Redirige a la página principal
    window.location.href = "./pagina_principal.html";
} else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contraseña o usuario incorrecto"
    });
}

