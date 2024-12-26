const usuarios = [{
    'usuario': "admin",
    'contraseña': "Colombia1"
  }, {
    'usuario': "prueba",
    'contraseña': "test213"
  }, {
    'usuario': 'bastilla',
    'contraseña': "basti2024"
  }, {
    'usuario': "salamina",
    'contraseña': 'samina13'
  }, {
    'usuario': "itagui",
    'contraseña': "sur2024"
  }, {
    'usuario': "acevedo",
    'contraseña': "acedo12"
  }, {
    'usuario': "cartagena",
    'contraseña': "maregena32"
  }, {
    'usuario': 'parqueadero',
    'contraseña': "quevedo25"
  }, {
    'usuario': "puntola50",
    'contraseña': 'tola50'
  }, {
    'usuario': "cartago",
    'contraseña': "targo1624"
  }, {
    'usuario': 'envigado',
    'contraseña': 'viengado21'
  }, {
    'usuario': "belen",
    'contraseña': "leen7845"
  }, /*{
    'usuario': 'konexion_11',
    'contraseña': "pswd1234_111"
  }*/, {
    'usuario': "caucasia",
    'contraseña': "causia963"
  }, {
    'usuario': 'santalucia',
    'contraseña': "santa2024"
  }];
  function ingresar() {
    let _0x4a4b6a = document.getElementById("usuario").value.trim();
    let _0x34ad13 = document.getElementById("contraseña").value.trim();
    const _0x8138ff = usuarios.find(_0x223613 => _0x223613.usuario === _0x4a4b6a && _0x223613.contraseña === _0x34ad13);
    if (_0x8138ff) {
      sessionStorage.setItem("autenticado", "true");
      window.location.href = './pagina_principal.html';
    } else {
      Swal.fire({
        'icon': "error",
        'title': "Oops...",
        'text': "Contraseña o usuario incorrecto"
      });
    }
  }