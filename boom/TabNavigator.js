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


function HomeScreen({ navigation }) {
  navigation.setOptions({

  })
 return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Home Screen</Text>
     <Text>Uh guys are welcomed</Text>
     <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
   </View>
 );
}

function DetailsScreen({navigation}) {
 navigation.setOptions({

   headerRight:() =>(
     <Button title="Save it"
     onPress={() => navigation.navigate("Save")}
     style={{
       backgroundColor:'#0891c7'
     }}/>
   )
 })
 return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Details Screen</Text>
     <Text></Text>
     <Text>Hurrey</Text>
   </View>
 );
}
function Save({navigation}){
 return(
   <View style={{flex:1,alignItems:'center',backgroundColor:'rgb(100,20,81)'}}>
     <Text style={{color:'white',marginTop:300,padding:20}}>Save the content</Text>
     <Button
     title="okay"
     onPress={() => navigation.popToTop()}
     style={{backgroundColor:'#009387',color:'white'}}
     />
   </View>
 )
}

function Hurrey(){
  return(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'black'}}>
  <Text style={{color:'white'}}>Hurrey....we have added one more tab</Text>
</View>
  );
}


function Profile() {
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
            <Text style={{color:'blue',fontWeight:'bold'}}>Name - Mohit Kaushik </Text>
            <Text style={{color:'red',fontWeight:'bold'}}>Institute - Vellore Institute of Technology</Text>
        </View>
    )
    
}
// const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStackScreen=createStackNavigator();
const Drawer =createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({navigation}) =>{
  return(
  <HomeStack.Navigator initialRouteName="Home"
     screenOptions={{
     headerStyle: {
       backgroundColor:'#009387',
     }
     }}
headerMode="float" // make the page header at constant position
>
       <HomeStack.Screen name="Homieee" component={HomeScreen} options={{
         headerLeft: () =>(
           <Icon.Button name ='menuunfold' size={15}
          backgroundColor="#009387" onPress={() =>{navigation.openDrawer()}}></Icon.Button>
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
       headerStyle:{
         backgroundColor:'#0891c7'  // used to change the color of above tab
       }
     }}
headerMode="float" // make the page header at constant position
>
       <DetailsStack.Screen 
       name="Details" component={DetailsScreen} options={{
        headerLeft: () =>(
          <Icon.Button name ='menuunfold' size={15} backgroundColor="#0891c7" onPress={() =>{navigation.openDrawer()}} />
        )
        }} />
       <DetailsStack.Screen name ="Save"  component={Save}/>
     </DetailsStack.Navigator>
  )
}



function App() {
    return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      inactiveColor="#3e2465"
       barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',     // to chnage the iconn lable
          tabBarColor:'#0891c7',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor:'red',
          tabBarIcon: ({ color }) => (
            <Icon name="notification" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen  name="Bookmark" 
      component={Hurrey}
      options={{
      tabBarLabel:"Bookmark",
      tabBarColor:'#0891c7',
      tabBarIcon: ({color}) =>(
        <Icon name="smileo" color={color} size={18} />
      )
      }}/>
     
     

<Tab.Screen  name="Profile" 
      component={Profile}
      options={{
      tabBarLabel:"Profile",
      tabBarColor:'grey',
      tabBarIcon: ({color}) =>(
        <Icon name="profile" color={color} size={18} />
      )
      }}/>
      
    </Tab.Navigator>
  );
    }

//    <NavigationContainer>

//      <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={MyTabs} />
//         <Drawer.Screen name="Details" component={DetailsStackScreen} />
//       </Drawer.Navigator>

//    </NavigationContainer>

export default App;
