'use strict';

var cipher = function(string, shift) {
    var ciphertext = "";
    for(var i = 0; i < string.length; i++) {
        var plainCharacter = string.charCodeAt(i);
        if(plainCharacter >= 97 && plainCharacter <= 122) {
            ciphertext += String.fromCharCode((plainCharacter - 97 + shift) % 26 + 97);
        } else if(plainCharacter >= 65 && plainCharacter <= 90) {
            ciphertext += String.fromCharCode((plainCharacter - 65 + shift) % 26 + 65);
        } else {
            ciphertext += String.fromCharCode(plainCharacter);
        }
    }
    return ciphertext;
};
