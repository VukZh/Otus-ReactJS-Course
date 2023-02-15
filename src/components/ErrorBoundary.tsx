import React, { ErrorInfo, ReactNode } from 'react';
import { style } from 'typestyle';
interface Props {
  children: ReactNode;
}
interface State {
  error: Error;
  errorInfo: ErrorInfo;
}

const formattedDataStyle = style({
  width: '90vw',
  height: '20vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  fontFamily: 'Arial, SansSerif',
  fontSize: '5rem',
  lineHeight: '7rem',
  color: 'darkblue',
  border: '2px solid black',
});
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <div className={formattedDataStyle}>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
