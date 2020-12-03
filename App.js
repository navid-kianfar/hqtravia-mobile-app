import React, {Component} from 'react';
import Root from './src/root';

require('./src/extensions/date');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Root />;
  }
}
