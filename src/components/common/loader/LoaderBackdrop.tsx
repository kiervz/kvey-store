import React from 'react';
import ReactDOM from 'react-dom';
import { ThreeDots } from  'react-loader-spinner';

const Backdrop = () => {
  return <div className='fixed top-0 left-0 w-full h-screen z-40 bg-[#00000059]' />;
};
  
const ModalOverlay = () => {
  return (
    <div className='fixed w-full z-50 overflow-hidden h-full flex justify-center items-center'>
      <ThreeDots
        height="100" 
        width="100" 
        radius="9"
        color="#000000" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export const LoaderBackdrop = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.getElementById('backdrop-root')!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.getElementById('overlay-root')!
      )}
    </>
  );
};
