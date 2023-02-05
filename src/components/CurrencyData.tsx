import React from 'react';
import './currencyData.css';

interface CurrencyDataProps {
  exchangeRate: number;
  currency: string;
}

interface CurrencyDataState {
  updatedTime: number;
}

export class CurrencyData extends React.Component<
  CurrencyDataProps,
  CurrencyDataState
> {
  constructor(props: CurrencyDataProps) {
    super(props);
    this.state = {
      updatedTime: new Date().valueOf(),
    };
  }

  componentDidUpdate() {
    this.setState({
      updatedTime: new Date().valueOf(),
    });
  }

  shouldComponentUpdate(nextProps: Readonly<CurrencyDataProps>): boolean {
    if (
      new Date().valueOf() - this.state.updatedTime > 5000 || // delay > 5 sec
      (nextProps.exchangeRate !== 0 && this.props.exchangeRate === 0) || // got 1st exchangeRate
      nextProps.currency !== this.props.currency // change currency
    ) {
      return true;
    }
    return false;
  }

  render() {
    return <div className='formattedData'>{this.props.exchangeRate}</div>;
  }
}
