import React from 'react';

interface IInput {
  name?: string | undefined;
  pattern?: string | undefined;
  placeholder?: string | undefined;
  checked?: boolean | undefined;
  className?: string | undefined;
  id?: string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  type?: string | undefined;
  maxLength?: number | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const Input: React.FC<IInput> = ({ 
  type = 'text', 
  name, 
  value, 
  id, 
  placeholder, 
  className, 
  maxLength, 
  checked, 
  pattern, 
  onChange,
  onKeyPress 
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      id={id}
      placeholder={placeholder}
      className={className}
      maxLength={maxLength}
      pattern={pattern}
      checked={checked}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};
