import React from 'react';

interface ISelect {
  value?: string | ReadonlyArray<string> | number | undefined;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  children?: React.ReactNode;
  id?: string | undefined;
  name?: string | undefined;
  className?: string | undefined;
}

export const Select: React.FC<ISelect> = ({ value, onChange, children, id, name, className }) => {
  return (
    <select
      id={id}
      name={name}
      className={className}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};
