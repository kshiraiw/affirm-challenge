import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import FormButton from './formButton';
import Cleave from 'cleave.js/react';
import payments from './../payments.png'
import { validateCCNum, validateCVCNum, validateExpDate } from '../utilities';
const CCForm = () => {
    const [formState, setFormState] = useState("");
    const validateInput = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        setFormState("was-validated");
    }

    const toggleClasses = (el, valid) => {
        if (valid) {
            el.classList.remove("is-invalid");
            el.classList.remove("is-clean");
            el.classList.add("is-valid");
        } else {
            el.classList.remove("is-valid");
            el.classList.remove("is-clean");
            el.classList.add("is-invalid");
        }
    }

    const onBlur = (evt) => {
        var result;
        switch (evt.target.id) {
            case "ccNum":
                result = validateCCNum(evt.target.value)
                break;
            case "expYr":
                const expMoEl = document.getElementById("expMo");
                const expMo = expMoEl.value;
                result = validateExpDate(expMo, evt.target.value);
                result ? toggleClasses(expMoEl, true) : toggleClasses(expMoEl, false);
                break;
            case "cvv":
                result = validateCVCNum(evt.target.value);
                break;
            default:
                console.log("hello");
        }

        result ? toggleClasses(evt.target, true) : toggleClasses(evt.target, false);
    }

    return (
        <Form id="form" className={formState} noValidate onSubmit={validateInput}>
            <Form.Control id="name" className="form-group" type="text" placeholder="Name" required />
            <Cleave id="ccNum" className={`form-control form-group`} placeholder="Card Number"
                options={{ creditCard: true }} onBlur={onBlur} required
            />
            <Form.Control id="cvv" className={`form-group`} maxLength={4} type="text" placeholder="CVV" onBlur={onBlur} required />

            <Row>
                <Col>
                    <Cleave id="expMo" className={`form-control`} placeholder="Exp. Month"
                        options={{ date: true, datePattern: ['m'] }} required />
                </Col>
                <Col>
                    <Cleave id="expYr" className={`form-control`} placeholder="Exp. Year"
                        options={{ date: true, datePattern: ['y'] }} onBlur={onBlur} required />
                </Col>
            </Row>

            <img className="payments" src={payments} alt="visa mastercard amex discover" />
            <FormButton variant="info"></FormButton>
        </Form>

    )
}

export default CCForm;