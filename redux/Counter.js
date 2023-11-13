import React from "react";
import { connect } from "react-redux";
import { Pressable, StyleSheet, Text, View } from 'react-native';


const Counter = ({count})=>{
    return(
        <View style={styles.container}>
            <Text style={{fontSize:40}}>This is count number: {count}</Text>
            <Pressable style={{width:100,height:100,backgroundColor:'green'}} onPress={()=>{
            store.dispatch(increment)
            setCount(store.getState().count)
            }}></Pressable>
        </View>
    )
}
var mapStateToProps = (state)=>({
    count: state.count
})

export default connect(mapStateToProps,null) (Counter);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  