
let cardTypes = {
    visa: {
        ccNum: new RegExp(/^4(\d{3}\s?)(\d{4}\s?){3}$/g),
        cvc: new RegExp(/^\d{3}$/g)
    },
    amex: {
        ccNum: new RegExp(/^3[4,7](\d{2})\s?(\d{6})\s?(\d{5})$/g),
        cvc: new RegExp(/^\d{4}$/g)
    }
};
let currentCardType = null;


const setCardType = (cardType) => {
    if (cardType == currentCardType) { return; }
    currentCardType = cardType;
}

const validateCCNum = (ccNum) => {
    if (!ccNum) { return false; }
    if (ccNum.match(cardTypes.amex.ccNum)) {
        setCardType(cardTypes.amex);
        return true;
    } else if (ccNum.match(cardTypes.visa.ccNum)) {
        setCardType(cardTypes.visa);
        return true;
    } else {
        setCardType(null);
        return false;
    }
}

const validateExpDate = (mo, yr) => {
    if (!mo || !yr) { return false; }
    var currentDate = new Date();
    var century = Math.floor(currentDate.getFullYear() / 100);
    var expDate = new Date();
    expDate.setMonth(mo - 1);
    expDate.setFullYear((century * 100) + parseInt(yr));
    return expDate > currentDate;

}

const validateCVCNum = (num) => {
    if (!currentCardType) { return false; }
    return num.match(currentCardType.cvc);
}


export {
    validateCCNum,
    validateCVCNum,
    validateExpDate,
}