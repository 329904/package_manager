const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level="debug";

logger.info("La app inicio correctamente!.");
logger.warn("Cuidado prro, falta la libreria x en el sistema.");
logger.error("No se encontro la funcion enviar email");
logger.fatal("no se pudo iniciar la aplicaccion");

function sumar(x, y){
    return x + y;
}

module.exports = sumar;