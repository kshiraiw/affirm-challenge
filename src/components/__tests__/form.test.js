import React from 'react';
import { render, getByPlaceholderText, fireEvent, wait } from '@testing-library/react';
import CCForm from '../ccForm';

test('turns input field invalid for invalid entries', async () => {
    const { getByPlaceholderText } = render(<CCForm />);
    const ccNumInput = getByPlaceholderText(/card number/i);
    fireEvent.blur(ccNumInput);
    await wait(() => {
        expect(ccNumInput.classList.contains("is-invalid")).toBeTruthy();
    })
});

test('turns input field valid for valid entries', async () => {
    const { getByPlaceholderText } = render(<CCForm />);
    const ccNumInput = getByPlaceholderText(/card number/i);
    fireEvent.change(ccNumInput, { target: { value: '3712 123123 12345' } })
    fireEvent.blur(ccNumInput);
    await wait(() => {
        expect(ccNumInput.classList.contains("is-valid")).toBeTruthy();
    })
});
