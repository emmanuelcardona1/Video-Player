const usuarios = [
    { usuario: "admin", contraseña: "Colombia1" },
    { usuario: "prueba", contraseña: "test213" },
    // Usuarios Operativos
    { usuario: "bastilla", contraseña: "basti2024" },
    //{ usuario: "itagui", contraseña: "sur2024" },//
    { usuario: "acevedo", contraseña: "acedo12" },
    { usuario: "cartagena", contraseña: "maregena32" },
    { usuario: "parqueadero", contraseña: "quevedo25" },
    { usuario: "cartago", contraseña: "targo1624" },
    { usuario: "envigado", contraseña: "viengado21" },
    { usuario: "belen", contraseña: "leen7845" },
    { usuario: "santalucia", contraseña: "sanlu5641" }
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
