import { FormControl, IInputProps, Input, theme } from 'native-base';
import React from 'react';

// import { Container } from './styles';

type InputText = IInputProps & {
  label: string;
}

const InputText: React.FC<InputText> = ({label, children, ...rest}) => {
  return (
    <>
      <FormControl.Label>{label}</FormControl.Label>
      <Input 
        {...rest}
        
      />
    </>
  );
}

export default InputText;