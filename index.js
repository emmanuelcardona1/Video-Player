/* // Lista de usuarios y contraseñas
const usuarios = [
    // { usuario: "admin1", contraseña: "123456" },
    
    { usuario: "emanuel", contraseña: "ema1234" },
    { usuario: "prueba", contraseña: "123456" },
    { usuario: "juan", contraseña: "juanda09" },
    { usuario: "camilo", contraseña: "camilo2024" }
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
      alert("Usuario o contraseña inválidos");
    }
  }
 */

const _0x57b0f8=_0x1617;function _0x1617(_0x4c936c,_0x10083b){const _0x25fc03=_0x25fc();return _0x1617=function(_0x1617f9,_0x3d5316){_0x1617f9=_0x1617f9-0x1df;let _0x2f0083=_0x25fc03[_0x1617f9];return _0x2f0083;},_0x1617(_0x4c936c,_0x10083b);}(function(_0x2fc890,_0x32fa51){const _0x28854c=_0x1617,_0x4c6405=_0x2fc890();while(!![]){try{const _0x4237dc=-parseInt(_0x28854c(0x1eb))/0x1+parseInt(_0x28854c(0x1fc))/0x2*(-parseInt(_0x28854c(0x1ea))/0x3)+parseInt(_0x28854c(0x1fa))/0x4*(-parseInt(_0x28854c(0x1ed))/0x5)+-parseInt(_0x28854c(0x1f0))/0x6*(parseInt(_0x28854c(0x1f4))/0x7)+parseInt(_0x28854c(0x1e4))/0x8+-parseInt(_0x28854c(0x1e7))/0x9*(parseInt(_0x28854c(0x1e3))/0xa)+parseInt(_0x28854c(0x1e5))/0xb;if(_0x4237dc===_0x32fa51)break;else _0x4c6405['push'](_0x4c6405['shift']());}catch(_0x2a73a6){_0x4c6405['push'](_0x4c6405['shift']());}}}(_0x25fc,0x4c3ad));const usuarios=[{'usuario':_0x57b0f8(0x1f1),'contraseña':_0x57b0f8(0x1fb)},{'usuario':_0x57b0f8(0x1e2),'contraseña':'123456'},{'usuario':_0x57b0f8(0x1e1),'contraseña':_0x57b0f8(0x1f6)},{'usuario':_0x57b0f8(0x1f3),'contraseña':_0x57b0f8(0x1e0)}];function _0x25fc(){const _0x168528=['getElementById','autenticado','12YJlCKA','emanuel','usuario','camilo','1126902sRRNZt','find','juanda09','value','contraseña','trim','16544NRJdeF','ema1234','131578aKeAkG','href','camilo2024','juan','prueba','330FzsTPs','4200960uQzQpe','7106451raSahE','true','24174LKHBXL','location','setItem','6tsShHA','10672lDymrl','./pagina_principal.html','370gMTiiy'];_0x25fc=function(){return _0x168528;};return _0x25fc();}function ingresar(){const _0x500364=_0x57b0f8;let _0x1b79eb=document[_0x500364(0x1ee)](_0x500364(0x1f2))[_0x500364(0x1f7)][_0x500364(0x1f9)](),_0x37b62e=document[_0x500364(0x1ee)](_0x500364(0x1f8))[_0x500364(0x1f7)]['trim']();const _0x503111=usuarios[_0x500364(0x1f5)](_0x2b7597=>_0x2b7597[_0x500364(0x1f2)]===_0x1b79eb&&_0x2b7597[_0x500364(0x1f8)]===_0x37b62e);_0x503111?(sessionStorage[_0x500364(0x1e9)](_0x500364(0x1ef),_0x500364(0x1e6)),window[_0x500364(0x1e8)][_0x500364(0x1df)]=_0x500364(0x1ec)):alert('Usuario\x20o\x20contraseña\x20inválidos');}