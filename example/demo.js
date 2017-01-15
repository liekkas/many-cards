import './demo.css';

import * as React    from 'react';
import ReactDOM from 'react-dom';

import {ACard} from '../dist/index';

const app = document.querySelector('#app');

class Example extends React.Component {

  render() {
    return (
      <div>
        <ACard></ACard>
      </div>
    )
  }
}

ReactDOM.render(<Example/>, app);
