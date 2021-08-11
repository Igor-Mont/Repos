/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import P from 'prop-types';
import ReactDOM from 'react-dom';
import { Container } from './styles';
import closeSVG from '../../assets/closeButton.svg';

export function Modal({ children, open, setOpen }) {
  return ReactDOM.createPortal(
    <Container>
      <div className="box">
        <button onClick={() => setOpen(!open)} className="close" type="button">
          <img src={closeSVG} alt="Fechar Modal" />
        </button>
        <div className="content">
          {children}
        </div>
      </div>
    </Container>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  children: P.element.isRequired,
  open: P.bool.isRequired,
  setOpen: P.func.isRequired,
};
