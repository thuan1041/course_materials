import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {createStore} from "redux";

import increment from './redux/action';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import Counter from './redux/Counter';
// import { connect } from 'react-redux';

var store = createStore(reducer)

export default function App() {
  const [count,setCount] = useState(0)
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Text style={{fontSize:40}}>This is count number: {count}</Text>
        <Pressable style={{width:100,height:100,backgroundColor:'green'}} onPress={()=>{
          store.dispatch(increment)
          setCount(store.getState().count)
        }}></Pressable>
      </View> */}
      <Counter/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
