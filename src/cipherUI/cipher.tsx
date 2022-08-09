const default_alphabet = "no"
const alphabets =  new Map<string,string>([
    ["no","abcdefghijklmnopqrstuvwxyzæøå "],
    ["en","abcdefghijklmnopqrstuvwxyz "],

])

const shiftCharacter = (character:string, code:number, alphabet:string):string =>{
    const index = alphabet.indexOf(character.toLowerCase());
    if (index < 0) return character;
    const result = alphabet[(index+code)%alphabet.length];
    if (character !== character.toLowerCase()) return result.toUpperCase();
    return result;
}

const parseCode = (code:string) => {
    if (!(/^\d+$/.test(code))) return 0
    return parseInt(code)
}

const caesarCipher = (message:string, code:string, decode=false, alphabet_code=default_alphabet):string => {
    let parsed = parseCode(code)
    const alphabet = alphabets.get(alphabet_code)!
    if (decode){
        const max_len:number = alphabet.length
        parsed = max_len - (parsed%max_len)
    }
    return message
        .split('')
        .map(x=>shiftCharacter(x,parsed,alphabet))
        .join('');
}

export default caesarCipher;