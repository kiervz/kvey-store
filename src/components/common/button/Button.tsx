import React from 'react';

interface IButton {
  className?: string | undefined;
  btnText?: string | ReadonlyArray<string> | number | undefined;
  type?: 'submit' | 'reset' | 'button' | undefined;
  btnIcon?: any;
  loading?: boolean;
  isDisabled?: boolean;
  onSubmit?: React.FormEventHandler<HTMLButtonElement> | undefined; 
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined; 
}
export const Button: React.FC<IButton> = ({ type = 'button', className, onSubmit, onClick, btnText = '', isDisabled = false, loading, btnIcon }) => {
  return (
    <button
      type={type}
      className={className}
      onSubmit={onSubmit}
      onClick={onClick}
      disabled={isDisabled || loading}
    >
      { !loading && btnIcon }
      { loading ? (<>Loading...</>) : btnText}
    </button>
  );
};
