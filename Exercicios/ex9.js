/**
 * Descrever
 * @param {*} notas Passar isso
 * @param {*} nome Passar Aquilo
 * @returns Retornará isso
 */

function durEvent(segundosdigitados){
    const segundos = (segundosdigitados % 3600 ) % 60;

    const minutos  = ((segundosdigitados-segundos) % 60);

    const horas = ((segundosdigitados-segundos)-(minutos * 60));
    
    return  horas,minutos,segundos;

}   
    
module.exports = {durEvent}