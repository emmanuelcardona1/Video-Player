// Lista de usuarios y contraseñas
const usuarios = [
    // { usuario: "admin1", contraseña: "123456" },
    
    /* { usuario: "prueba", contraseña: "456789" }, */
    { usuario: "emanuel", contraseña: "ema1234" },
    { usuario: "juan", contraseña: "juanda09" },
    { usuario: "camilo", contraseña: "camilo2024" },
    
    // Usuarios Operativos
  
    
    { usuario: "bastilla", contraseña: "123456" },
    { usuario: "salamina", contraseña: "123456" },
    { usuario: "itagui", contraseña: "123456" },
    { usuario: "acevedo", contraseña: "123456" },
    { usuario: "cartagena", contraseña: "123456" },
    { usuario: "parqueadero", contraseña: "123456" },
    { usuario: "puntola50", contraseña: "punto1234" },
    { usuario: "bucaramanga", contraseña: "123456" },
    { usuario: "cartago", contraseña: "123456" },
    { usuario: "envigado", contraseña: "123456" },
    { usuario: "belen", contraseña: "123456" },
    { usuario: "konexion", contraseña: "pswd1234" },
    { usuario: "caucasia", contraseña: "123456" },
    
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