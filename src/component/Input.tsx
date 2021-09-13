import React from "react";
import styled from 'styled-components';

const Wrap = styled.div`
width: 400px;
margin: 1rem auto 2rem;
`;
const Label = styled.label`
font-size: 1rem;
display: block;
margin-bottom: 0.3rem;
`;
const Input1 = styled.input`
width: 400px;
height: 5rem
margin: 1rem 0;
background: #F4F4F4;
border: .1rem solid #F4F4F4;
border-radius: 1.0rem;
line-height: 2;
letter-spacing: -0.02em;
font-size: 1.2rem;
border-radius: 0.5rem;
padding: 0.2rem;
&:focus {
    border-color: #9732FC !important;
    caret-color: #9732FC;
    outline-color: #9732FC;
    outline-width: 0px;
}
`;

const Input2 = styled.input`
`;

interface Iprops {
    id: string;
    type: string;
    labelTxt: string;
    index: number;
    placeholder?: string;
}

const Input = (_props: Iprops) => {
    const { id, type, labelTxt, index, placeholder } = _props;
    return (
        <Wrap>
            <Label htmlFor={id}>{labelTxt}</Label>
            {type === 'checkbox' ?
            <Input2 type={type} name={id} id={id} data-index={index} placeholder={placeholder} />
            :
            <Input1 type={type} name={id} id={id} data-index={index} placeholder={placeholder} />
            }
        </Wrap>
    );
}

export default Input;