import React, { useState } from 'react';
import css from '../../styles/form.css';

const { Input } = css;

function InputComponent(props) {
  const { placeholder, action, inputValue } = props;

  return (
    <React.Fragment>
      <Input
        value={inputValue}
        type={'text'}
        placeholder={placeholder}
        maxLength={'100'}
        onChange={(event) => {
          const newValue = event.target.value;
          action(newValue);
        }}
      />
    </React.Fragment>
  );
}

export default InputComponent;
