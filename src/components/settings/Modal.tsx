import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot =
  typeof window !== 'undefined' ? document.getElementById('modal') : null;

export class Modal extends React.Component<{ children?: React.ReactNode }> {
  el: HTMLElement = document.createElement('div');

  componentDidMount() {
    this.el.style.position = 'fixed';
    this.el.style.top = '0';
    this.el.style.left = '0';
    this.el.style.width = '100%';
    this.el.style.height = '100%';
    this.el.style.zIndex = '50';
    this.el.style.background = 'rgba(0, 0, 0, 0.8)';

    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
