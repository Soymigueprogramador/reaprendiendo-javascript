// Vamos a mostrar el nombre de la resolucion correspondiente. 

/*
    HD 1280 * 720
    FHD 1920 * 1080
    WQHD 2560 * 1440
    4K 3840 * 2160
    8K 7680 * 4320
*/

function nombreDeResolucion(ancho, alto) {
    if( ancho > 1280 && alto > 720  ) {
        return 'HD'; 
    } else if ( ancho > 1920 && alto > 1080  ) {
        return 'FHD'; 
    } else if ( ancho > 2560 && alto > 1440  ) {
        return 'WQHD'; 
    } else if ( ancho > 3840 && alto > 2160 ) {
        return '4K'; 
    } else if ( ancho > 7680 && alto > 4320  ) {
        return '8K'; 
    } else {
        return false;
    }
};

let nombre = nombreDeResolucion(1290, 1080);
console.log(`La resolución actual es ${nombre}`);