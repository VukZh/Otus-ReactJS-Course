import React, { ErrorInfo, ReactNode } from 'react';
import './currencyData.css';
interface Props {
  children: ReactNode;
}
interface State {
  error: Error;
  errorInfo: ErrorInfo;
}
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
      return <div className='formattedData'>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
