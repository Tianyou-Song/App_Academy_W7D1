import React from 'react';
import {Provider} from 'react-redux';

const Root = ({store}) => (
  <Provider store = {store}>
    <h1>I'm the root</h1>
  </Provider>
);

export default Root;
