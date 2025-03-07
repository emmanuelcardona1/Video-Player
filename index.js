const usuarios = [
    {
        usuario: 'admin',
        contraseña: 'Colombia1',
    },
    {
        usuario: 'prueba',
        contraseña: 'test213',
    },
    {
        usuario: 'bastilla',
        contraseña: 'basti2024',
    },
    {
        usuario: 'salamina',
        contraseña: 'samina13',
    },
    {
        usuario: 'itagui',
        contraseña: 'sur2024',
    },
    {
        usuario: 'acevedo',
        contraseña: 'acedo12',
    },
    {
        usuario: 'cartagena',
        contraseña: 'maregena32',
    },
    {
        usuario: 'parqueadero',
        contraseña: 'quevedo25',
    },
    {
        usuario: 'cartago',
        contraseña: 'targo1624',
    },
    {
        usuario: 'envigado',
        contraseña: 'viengado21',
    },
    {
        usuario: 'belen',
        contraseña: 'leen7845',
    },
    {
        usuario: 'santalucia',
        contraseña: 'sanlu5641',
    },
]
function ingresar() {
    let _0x11c889 = document.getElementById('usuario').value.trim(),
        _0x50e04d = document.getElementById('contraseña').value.trim()
    const _0x323fcf = usuarios.find(
        (_0x237372) =>
            _0x237372.usuario === _0x11c889 && _0x237372['contraseña'] === _0x50e04d
    )
    _0x323fcf
        ? (sessionStorage.setItem('autenticado', 'true'),
            (window.location.href = './pagina_principal.html'))
        : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Contraseña o usuario incorrecto',
        })
}