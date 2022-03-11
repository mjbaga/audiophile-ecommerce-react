import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className="fixed top-0 left-0 w-full h-screen z-[100] bg-black/50" onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed bg-white z-[200] p-8 rounded-lg top-[20%] left-1/2 -translate-x-2/4 w-1/2 animate-slidedown delay-[2000ms]">
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
