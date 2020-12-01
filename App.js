import * as React from 'react';
import {DrawerNavigator} from './navigation/DrawerNavigator';
import {TestNavigator} from './navigation/TestNavigator';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducers/products';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const rootReducer = combineReducers({
  products: productReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <DrawerNavigator />
    </Provider>
  );
}
