import React,{Component} from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
// import { useDispatch, useSelector } from 'react-redux';
 import { deleteFood } from './actions/food';

import {connect} from 'react-redux';


// const FoodList = () => {

//   const dispatch = useDispatch();

//   const deleteCurrent = (key) => dispatch(deleteFood(key))

//   const foods = useSelector(state => state.foodReducer.foodList)

class FoodList extends Component{

  static navigationOptions={
    title:'FoodList',
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:'green'
    }
  };
  render(){
    // console.log(this.props.navigation.getParam('deleteFood'));
  return (
    <FlatList style={styles.listContainer}
      data={this.props.foods}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={<Icon
              name='delete'
              size={36}
              onPress={() => this.props.delete(data.item.key)} />
            }
          />
          }
    />
  );

}}
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#212121',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});
  

const mapStateToProps = (state) =>{
  console.log(state);
return{
  foods: state.foodReducer.FoodList
}
}

const mapDispatchToProps = (dispatch) =>{
  return{
    delete: (key) =>dispatch(deleteFood(key))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (FoodList);
  