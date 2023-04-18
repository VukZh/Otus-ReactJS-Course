import ReactDOM from 'react-dom';
import React from "react";
import styles from './style.module.css';
const App: React.FC = () => (
  <div className={styles.text}>Hello</div>
)
ReactDOM.render(
    <App />,
  document.getElementById('app')
);