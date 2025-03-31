function isStrongPassword(password){
    if (password.length < 8)return false;
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    for (let char of password) {
        if (char >= 'A' && char <= 'Z') hasUpperCase = true;
        if (char >= 'a' && char <= 'z') hasLowerCase = true;
        if (char >= '0' && char <= '9') hasDigit = true;
    }
    return hasUpperCase && hasLowerCase && hasDigit;
}


console.log(isStrongPassword("Abc123!@")); 
console.log(isStrongPassword("weakpass")); 
    



