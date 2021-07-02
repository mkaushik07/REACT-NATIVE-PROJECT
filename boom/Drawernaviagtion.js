import * as React from 'react'
import {Button,Text,View,Image,ScrollView,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators, HeaderStyleInterpolators } from '@react-navigation/stack';
import { Easing } from 'react-native-reanimated';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//  import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

function Home(){
  return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"grey"}}>
        <Text style={{fontSize:40,fontFamily: "Cochin",fontWeight:"bold",color:"blue"}}>Home Screen</Text>
      </View>
  )
}

function Profile(){
  return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"grey"}}>
        <Text style={{fontSize:40,fontFamily: "Cochin",fontWeight:"bold",color:"blue"}}>Profile Page</Text>
      </View>
  )
}
function Bookmarks(){
  return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"grey"}}>
        <Text style={{fontSize:40,fontFamily: "Cochin",fontWeight:"bold",color:"blue"}}>Bookmarks </Text>
      </View>
  )
}
function Setting(){
  return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"grey"}}>
        <Text style={{fontSize:40,fontFamily: "Cochin",fontWeight:"bold",color:"blue"}}>Setting</Text>
      </View>
  )
}
function Support(){
  return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"grey"}}>
        <Text style={{fontSize:40,fontFamily: "Cochin",fontWeight:"bold",color:"blue"}}>Support</Text>
      </View>
  )
}

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const BookmarkStack = createStackNavigator();
const SettingStack = createStackNavigator();
const SupportStack = createStackNavigator();

const Drawer=createDrawerNavigator();


const HomeStackScreen = ({navigation}) =>{
return(
  <HomeStack.Navigator initialRouteName="Home">
  <HomeStack.Screen name="Home page" component={Home} options={{
    headerLeft: ()=>(
      <Icon.Button name="menuunfold" size={20}
      backgroundColor="#009387" onPress={() =>{navigation.openDrawer()}} />
    )

  }} />
  </HomeStack.Navigator>
);
}

// now we will make profilestack

const ProfileStackScreen = ({navigation}) =>{
  return(
    <ProfileStack.Navigator initialRouteName="Home">
    <ProfileStack.Screen name="Profile page" component={Profile} options={{
      headerLeft: ()=>(
        <Icon.Button name="menuunfold" size={20}
        backgroundColor="#009387" onPress={() =>{navigation.openDrawer()}} />
      )
  
    }} />
    </ProfileStack.Navigator>
  );
  }

  // now we will make  Bookmark stack

  const BookmarkStackScreen = ({navigation}) =>{
    return(
      <BookmarkStack.Navigator initialRouteName="Home">
      <BookmarkStack.Screen name="Bookmark page" component={Bookmarks} options={{
        headerLeft: ()=>(
          <Icon.Button name="menuunfold" size={20}
          backgroundColor="#009387" onPress={() =>{navigation.openDrawer()}} />
        )
    
      }} />
      </BookmarkStack.Navigator>
    );
    }

  // now we will create the Setting stack

  const SettingStackScreen = ({navigation}) =>{
    return(
      <SettingStack.Navigator initialRouteName="Home">
      <SettingStack.Screen name="Setting page" component={Setting} options={{
        headerLeft: ()=>(
          <Icon.Button name="menuunfold" size={20}
          backgroundColor="#009387" onPress={() =>{navigation.openDrawer()}} />
        )
    
      }} />
      </SettingStack.Navigator>
    );
    }

    // now we will create the Support stack

    const SupportStackScreen = ({navigation}) =>{
      return(
        <SupportStack.Navigator initialRouteName="Home">
        <SupportStack.Screen name="Support page" component={Support} options={{
          headerLeft: ()=>(
            <Icon.Button name="menuunfold" size={20}
            backgroundColor="#009387" onPress={() =>{navigation.openDrawer()}} />
          )
      
        }} />
        </SupportStack.Navigator>
      );
      }


function Drawernaviagtion() {
 return (
   <NavigationContainer>

     <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home"component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={ProfileStackScreen} />
        <Drawer.Screen name ="Bookmark" component={BookmarkStackScreen} />
        <Drawer.Screen name="Setting" component={SettingStackScreen} />
        <Drawer.Screen name="Support" component={SupportStackScreen} />
        </Drawer.Navigator>

   </NavigationContainer>
 );
}

export default Drawernaviagtion;
