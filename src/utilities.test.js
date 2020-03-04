import { validateCCNum, validateCVCNum, validateExpDate } from './utilities';

it('accepts valid visa number', () => {
    expect(validateCCNum("4333 2333 2323 1212")).toBeTruthy();
});

it('accepts visa number without spaces', () => {
    expect(validateCCNum("4333233323231212")).toBeTruthy();
});

it('accepts amex number', () => {
    expect(validateCCNum("3712 123123 12345")).toBeTruthy();
});

it('rejects invalid number', () => {
    expect(validateCCNum("3712 12315")).toBeFalsy();
});

it('it rejects cvv number without valid cc', () => {
    validateCCNum("12321");
    expect(validateCVCNum("123")).toBeFalsy();
});

it('it expects amex cvv number if amex card is entered', () => {
    validateCCNum("3712 123456 12345");
    expect(validateCVCNum("1234")).toBeTruthy();
});

it('it rejects amex cvv number if visa card is entered', () => {
    validateCCNum("4123 1234 1234 1234");
    expect(validateCVCNum("1234")).toBeFalsy();
});

it('rejects exp date if date is in the past', () => {
    expect(validateExpDate("01", "20")).toBeFalsy();
});

it('accepts exp date if date is in the future', () => {
    expect(validateExpDate("01", "25")).toBeTruthy();
});