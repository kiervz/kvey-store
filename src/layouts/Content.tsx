import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Content:React.FC<Props> = ({ children }) => {
  return (
    <div className='mt-14'>
      {children}
    </div>
  );
};
