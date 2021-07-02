import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Image
} from 'react-native'

import {connect} from 'react-redux';
import { addFood } from './actions/food';


// import { useDispatch } from 'react-redux';
// import { addFood } from './actions/food';

// const FoodForm = ({ navigation }) => {

//   const [food, setFood] = useState('')

//   const dispatch = useDispatch();

//   const submitFood = (food) => dispatch(addFood(food))
class FoodForm extends Component{
  static navigationOptions={
    title:'Home',
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:'blue',
    },
  };

  state={
    food:null
  }
  render(){
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        source={require('./assets/logo.png')}
      /> */}
      <Text style={styles.title}>Redux</Text>
      <TextInput
        value={this.state.food}
        placeholder='Name'
        style={styles.foodInput}
        onChangeText={(food) => this.setState({food})}
      />
      <Button title='Submit'
        // style={{ marginBottom: 16 }}
        // onPress={() => {
        //   submitFood(food)
        //   setFood('')
        // }}

        color='black'
        onPress={() =>this.props.add(this.state.food)}
        >
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
      </Button>
      <Button title='Go to FoodList'
        // style={{ marginBottom: 16 }}
        // onPress={() =>
        //   navigation.navigate('FoodList')}
      onPress={() => 
      this.props.navigation.navigate('FoodList')}
      />
      
     
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'white'
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  }
});

const mapStateToProps = (state) =>{
  console.log(state);
return{
  foods: state.foodReducer.FoodList
}
}

const mapDispatchToProps = (dispatch) =>{
  return{
    add: (food) =>dispatch(addFood(food))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (FoodForm);
