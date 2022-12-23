import React from 'react';

interface IInput {
  name?: string | undefined;
  pattern?: string | undefined;
  placeholder?: string | undefined;
  checked?: boolean | undefined;
  className?: string | undefined;
  id?: string | undefined;
  disabled?: boolean | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  type?: string | undefined;
  maxLength?: number | undefined;
  max?: number | string | undefined;
  min?: number | string | undefined;
  step?: number | string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export const Input: React.FC<IInput> = ({ 
  type = 'text', 
  name, 
  value, 
  id, 
  disabled,
  placeholder, 
  className, 
  maxLength, 
  max, 
  min, 
  step, 
  checked, 
  pattern, 
  onChange,
  onKeyPress,
  onBlur
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      className={className}
      maxLength={maxLength}
      max={max}
      min={min}
      step={step}
      pattern={pattern}
      checked={checked}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onBlur={onBlur}
    />
  );
};
