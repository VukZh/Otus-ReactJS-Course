import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const modalRoot = document.getElementById('modal');

export class Modal extends React.Component<{ children?: React.ReactNode }> {
  el: HTMLElement = document.createElement('div');

  componentDidMount() {
    this.el.classList.add('modal-overlay');
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
