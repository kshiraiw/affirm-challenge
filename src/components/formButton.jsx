import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

const FormButton = (props) => {
    return (
        <ButtonToolbar className="justify-content-center">
            <Button type="submit" className={`form-control btn-${props.variant}`}>
                Submit
            </Button>
        </ButtonToolbar>
    )
}

export default FormButton;