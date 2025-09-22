function capitalizeWords(sentence)
{
    return sentence.split (" ")
    .map( word => { return word.charAt(0).toUpperCase() + 
    word.slice(1).toLowerCase()}).join(" ");
}
 userInput = "i don't know what to do with javascript";
console.log(capitalizeWords(userInput));