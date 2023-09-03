import React from 'react';
import { useNavigate } from 'react-router-dom';

const HOCButton = (ButtonComponent, params) => {
  return (props) => {
    const navigate = useNavigate();

    const onClick = () => {
      navigate(props.text);
      props.onClick;
    };
    return <ButtonComponent {...props} onClick={onClick} />;
  };
};

export default HOCButton;
