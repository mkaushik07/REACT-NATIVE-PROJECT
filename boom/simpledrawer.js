import * as React from 'react'
import {Button,Text,View,Image,ScrollView,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators } from '@react-navigation/stack';
import { Easing } from 'react-native-reanimated';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//  import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen'

function Save({navigation}){
 return(
   <View style={{flex:1,alignItems:'center',backgroundColor:'rgb(100,20,81)'}}>
     <Text style={{color:'white',marginTop:300,padding:20}}>Save the content</Text>
     <Button
     title="okay"
     onPress={() => navigation.popToTop()}
     style={{backgroundColor:'red',color:'white'}}
     />
   </View>
 )
}
// const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer =createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>{
  return(
  <HomeStack.Navigator initialRouteName="Home"
     screenOptions={{
       gestureEnabled:true, // gesture will help us to navigate to page with the help of swipe the pages using our hand
       gestureDirection:'horizontal', // let the user to go back using swipping
       // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS // it will create the direction from vertical to horizontal while navigating between screens
     
     ...TransitionPresets.SlideFromRightIOS // it will also make it to work in horizontal dir instead of vertical
     }}
headerMode="float" // make the page header at constant position
>
       <HomeStack.Screen name="Home" component={HomeScreen} options={{
         headerLeft: () =>(
           <Icon.Button name ='menuunfold' size={15}
          background="green" onPress={() =>{navigation.openDrawer()}}></Icon.Button>
         )
       }} />

       <HomeStack.Screen name ="Save"  component={Save}/>
     </HomeStack.Navigator>
  )
}


const DetailsStackScreen = ({navigation}) =>{
  return(
  <DetailsStack.Navigator initialRouteName="Home"
     screenOptions={{
       gestureEnabled:true, // gesture will help us to navigate to page with the help of swipe the pages using our hand
       gestureDirection:'horizontal', // let the user to go back using swipping
       // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS // it will create the direction from vertical to horizontal while navigating between screens
     
     ...TransitionPresets.SlideFromRightIOS // it will also make it to work in horizontal dir instead of vertical
     }}
headerMode="float" // make the page header at constant position
>
       <DetailsStack.Screen 
       name="Details" component={DetailsScreen} options={{
        headerLeft: () =>(
          <Icon.Button name ='menuunfold' size={15}
         background="green" onPress={() =>{navigation.openDrawer()}}></Icon.Button>
        )
        }} />
       <DetailsStack.Screen name ="Save"  component={Save}/>
     </DetailsStack.Navigator>
  )
}

function App() {
 return (
   <NavigationContainer>

     <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>

   </NavigationContainer>
 );
}

export default App;

// There are basically 3 steps in creating the stack navigator + drawer navigator
//Step 1 - Create the components you want in ur app
//Step 2  - Assign these componentss to the Stack navigator
//Step 3 - Then put the value of these navigator to Drawer
