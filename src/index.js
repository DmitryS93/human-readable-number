module.exports = function toReadable (number) {
    const hundredsAndOnes = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let result = 0;

    if (number <= 9 && number >= 1) {
        result = hundredsAndOnes[number];
    } else if (number === 0) {
        result = 'zero';
    } else if (number >= 10 && number <20) {
        const numStr = String(number);
        result = tenToNineteen[numStr[1]];
    } else if (number >= 20 && number < 100) {
        const numStr = String(number);
        if (numStr[1] === "0") {
            result = dozens[numStr[0]];
        } else {
            result = dozens[numStr[0]] + " " + hundredsAndOnes[numStr[1]];
        }
    } else {
        const numStr = String(number);
        if (numStr[1] === "0" && numStr[2] === "0") {
            result = hundredsAndOnes[numStr[0]] + " hundred";
        } else if (numStr[2] === "0" && numStr[1] === "1") {
            result = hundredsAndOnes[numStr[0]] + " hundred ten";
        } else if (numStr[2] === "0") {
            result = hundredsAndOnes[numStr[0]] + " hundred " + dozens[numStr[1]];
        } else if (numStr[1] === "1") {
            result = hundredsAndOnes[numStr[0]] + " hundred " + tenToNineteen[numStr[2]];
        } else if (numStr[1] === "0") {
            result = hundredsAndOnes[numStr[0]] + " hundred " + hundredsAndOnes[numStr[2]];
        } else {
            result = hundredsAndOnes[numStr[0]] + " hundred " + dozens[numStr[1]] + " " + hundredsAndOnes[numStr[2]];
        }    
    } 
return result
}
