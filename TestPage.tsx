import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {setInitial, getDataUser} from './src/redux/app/app.reducer';
import {SetApp} from './src/redux/app/type.d';
import {RootState} from './src/redux/root';

const mapDispatch = {
  wakwaw: (payload: SetApp) => ({type: setInitial.type, payload}),
  getDataUser: () => getDataUser(),
};

const mapState = (state: RootState) => ({
  token: state.app.token,
});

const connector = connect(
  mapState,
  mapDispatch,
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

const TestPage = (props: Props) => {
  const onHandlePress = () => {
    props.wakwaw({token: 'wakwaw', session: 'aduh'});
  };

  return (
    <View>
      <TouchableOpacity onPress={onHandlePress}>
        <Text>PRess mee!</Text>
        <Text>{props.token}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.getDataUser}>
        <Text>Coming from thunk!!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connector(TestPage);
