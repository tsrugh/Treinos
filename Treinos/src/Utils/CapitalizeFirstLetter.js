/**
 * 
 * @param {texto} string 
 * Deixa primeira letra da palavra em maiuscula.
 * Ex: exemplo -> Exemplo
 */
const capitalizeFirstLetter = string => {

    return string[0].toUpperCase() + string.slice(1);

}

export default capitalizeFirstLetter;