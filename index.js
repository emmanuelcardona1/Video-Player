// Lista de usuarios y contraseñas
const usuarios = [
  { usuario: "admin1", contraseña: "123456" },
  { usuario: "emanuel", contraseña: "ema1234" },
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


// const _0x3c182c=_0x3f9a;function _0x299a(){const _0x4326b2=['usuario','autenticado','1SCahnI','./pagina_principal.html','true','setItem','juanda09','205QEOwUz','4653600gSqpPp','trim','getElementById','juan','contraseña','1969206firyoK','Usuario\x20o\x20contraseña\x20inválidos','ema1234','value','href','2072203PEVBfm','46124MQnaGG','286486zESqBg','208896saHwgN','1764iMYfdl','38810ZsboAa'];_0x299a=function(){return _0x4326b2;};return _0x299a();}function _0x3f9a(_0x4d1b7c,_0x30e4d7){const _0x299a98=_0x299a();return _0x3f9a=function(_0x3f9a99,_0x43a1f0){_0x3f9a99=_0x3f9a99-0x18e;let _0x4ad4c4=_0x299a98[_0x3f9a99];return _0x4ad4c4;},_0x3f9a(_0x4d1b7c,_0x30e4d7);}(function(_0x324276,_0x53a63a){const _0x27437d=_0x3f9a,_0x5d26d7=_0x324276();while(!![]){try{const _0x5d0dd3=-parseInt(_0x27437d(0x1a0))/0x1*(-parseInt(_0x27437d(0x19a))/0x2)+parseInt(_0x27437d(0x19b))/0x3+parseInt(_0x27437d(0x199))/0x4*(parseInt(_0x27437d(0x1a5))/0x5)+parseInt(_0x27437d(0x193))/0x6+-parseInt(_0x27437d(0x198))/0x7+parseInt(_0x27437d(0x18e))/0x8+-parseInt(_0x27437d(0x19c))/0x9*(parseInt(_0x27437d(0x19d))/0xa);if(_0x5d0dd3===_0x53a63a)break;else _0x5d26d7['push'](_0x5d26d7['shift']());}catch(_0x1977d6){_0x5d26d7['push'](_0x5d26d7['shift']());}}}(_0x299a,0x838da));const usuarios=[{'usuario':'admin1','contraseña':'123456'},{'usuario':'emanuel','contraseña':_0x3c182c(0x195)},{'usuario':_0x3c182c(0x191),'contraseña':_0x3c182c(0x1a4)}];function ingresar(){const _0x149f09=_0x3c182c;let _0x1b897d=document[_0x149f09(0x190)](_0x149f09(0x19e))[_0x149f09(0x196)]['trim'](),_0x5e27dc=document['getElementById'](_0x149f09(0x192))[_0x149f09(0x196)][_0x149f09(0x18f)]();const _0x4e68a8=usuarios['find'](_0x27276d=>_0x27276d[_0x149f09(0x19e)]===_0x1b897d&&_0x27276d['contraseña']===_0x5e27dc);_0x4e68a8?(sessionStorage[_0x149f09(0x1a3)](_0x149f09(0x19f),_0x149f09(0x1a2)),window['location'][_0x149f09(0x197)]=_0x149f09(0x1a1)):alert(_0x149f09(0x194));}



  