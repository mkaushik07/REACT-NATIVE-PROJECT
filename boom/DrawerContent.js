import React from 'react';
import {View,StyleSheet} from 'react-native';
import {
    Text,
    Title,
    useTheme,
    Captain,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper'


 import{ AuthContext } from './components/context';  // for signout

import{DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';


import Icon from 'react-native-vector-icons/AntDesign';

export function DrawerContent(props){
    // const paperTheme=useTheme();
      // const { signOut, toggleTheme } = React.useContext(AuthContext);

      const [isDarkTheme,setIsDarkTheme]=React.useState(false);
      const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
      }
      const {signout} = React.useContext(AuthContext);  // here signout we get from app.js

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View>
                 <Title style={{fontSize:20,fontFamily:'sans-serif-condensed',color:'blue',fontWeight:'bold',fontSize:30,marginTop:20}}>Tasks</Title>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />

 {/* The is the details drawer icon and content */}

                        <DrawerItem
                        icon={({color,size}) =>{
                          <Icon
                          name="idcard" 
                          color={color}
                          size={size}
                          />
                        }}
                        label="Details"
                        onPress={()=>props.navigation.navigate("Details")}
                        />

                        
 {/* The is the Bookmark drawer icon and content */}

                        <DrawerItem 
                        icon={({color,size}) =>{
                            <Icon
                            name="book"
                            size={size}
                            color={color}
                            />

                        }}
                        label="Bookmarks"
                        onPress={() => props.navigation.navigate("Bookmark")} 
                        />

{/* here in the on press function , the Bookmark name come from the MyTabs component because */}
{/* MyTabs component is called up in the App.js file so according to it only we need to give the names */}


                        
 {/* The is the Profile drawer icon and content */}

                                <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="user" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />


                        </Drawer.Section>

                        <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>


            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="checksquareo" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signout()}}
                />
            </Drawer.Section>

        </View>
    )
}


const styles=StyleSheet.create({

    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
    }); 
//  this code helps us to navigate between the screens using the drawer navigator