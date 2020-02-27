import React from 'react';
import {Text, View} from 'react-native';
import {confStore} from './src/redux/store';
import {Provider} from 'react-redux';
import Press from './TestPage';
const store = confStore();

const App = () => {
  return (
    <Provider store={store}>
      <View style={{marginTop: 100}}>
        <Text> The end of fucking world </Text>
        <Press />
      </View>
    </Provider>
  );
};

export default App;
