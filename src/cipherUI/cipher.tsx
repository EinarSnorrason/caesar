const default_alphabet = "no"
const alphabets =  new Map<string,string>([
    ["no","abcdefghijklmnopqrstuvwxyzæøå "],
    ["en","abcdefghijklmnopqrstuvwxyz "],

])

function shiftCharacter(character: string, code: number, alphabet: string): string {
    const index = alphabet.indexOf(character.toLowerCase());
    if (index < 0)
        return character;
    const result = alphabet[(index + code) % alphabet.length];
    if (character !== character.toLowerCase())
        return result.toUpperCase();
    return result;
}

function parseCode(code: string) {
    if (!(/^\d+$/.test(code)))
        return 0;
    return parseInt(code);
}

function caesarCipher(message: string, code: string, decode = false, alphabet_code = default_alphabet): string {
    let parsed = parseCode(code);
    const alphabet = alphabets.get(alphabet_code)!;
    if (decode) {
        parsed = alphabet.length - (parsed % alphabet.length);
    }
    return message
        .split('')
        .map(x => shiftCharacter(x, parsed, alphabet))
        .join('');
}

export default caesarCipher;