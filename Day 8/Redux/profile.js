import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import userprofile from './userprofile';
import Userprofile from './userprofile';

class Pro extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
            <Userprofile/>
        </div>
      </Provider>
    );
  }
}

export default Pro;
