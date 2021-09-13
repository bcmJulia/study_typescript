import React from "react";
import styled from 'styled-components';

const Button1 = styled.button`
width: 400px;
margin: 0 auto 6rem;
background: white;
color: black;
border-radius: 4px;
padding: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
font-size: 1rem;
font-weight: 600;
&:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
}
`;

interface Iprops {
    id: string,
    buttonTxt: string,
}

const Button = (_props: Iprops) => {
    const { id, buttonTxt } = _props;
    return (
        <div className="input-wrap">
            <Button1 id={id}>{buttonTxt}</Button1>
        </div>
    );
}

export default Button;