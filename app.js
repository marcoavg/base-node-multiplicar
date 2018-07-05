const argv = require('./config/yargs').argv


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]
    //console.log(comando);

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
        break
    case 'crear':
        console.log(argv.base);
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`archivo ${archivo}-.txt se creo`))
            .catch((err) => {
                console.log(err);
            });
        break
    default:
        console.log('ninguno');
}