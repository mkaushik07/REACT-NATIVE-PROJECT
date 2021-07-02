import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,   // for button
    Dimensions, 
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
 
const FirstScreen =({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textSign1}>Welcome to my App</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.title}>Stay connected with everyone!</Text>
                <Text style={styles.text}>Sign in with the account </Text>
                    <View style={styles.button}>
                <TouchableOpacity onPress={() =>navigation.navigate('SigninScreen')}>
                    <LinearGradient
                    colors   ={['red','blue']}
                    style={styles.signIn}      
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default FirstScreen;


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,     
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,    // it means 2/3 of the screen is header
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,     // it means 1/3 of the screen is footer
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      
  },
  textSign1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:40
}
});