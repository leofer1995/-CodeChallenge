//Aumenta cantidad de respuestas correctas
export const correct = () => {
    return {
        type:'CORRECT',
    }
} 
//Ingresa pregunta con respuesta al store
export const next = (obj) => {
    return {
        type:'NEXT',
        payload:obj,
    }
}
//resetea el store
export const reset = () => {
    return {
        type:'RESET',
    }
}