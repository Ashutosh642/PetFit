import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import PetView from './PetView';
import Loginpage from './Loginpage';
import DrawScreens from './DrawScreens';
import AdminMenu from './AdminMenu';
import AddPetForm from './AddPetForm';
import UserProfile from './UserProfile';
import Help from './Help';
import Support from './Support';
import About from './About';
import Logout from './Logout';
import AllProducts from './AllProducts';
import AddProducts from './AddProducts';
import ViewFeedback from './ViewFeedback';

const Stack = createStackNavigator();


const NavScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'LOGIN',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri',
              textAlign: "center"
            },
          }
          } name="loginpage" component={Loginpage} />
        <Stack.Screen
          options={{
            title: 'ADD PET',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            }
          }
          }
          name="AddPet" component={AddPetForm} />

        <Stack.Screen
          options={{
            title: 'USER PROFILE',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            }
          }
          }
          name="UserProfile" component={UserProfile} />


        <Stack.Screen
          options={{
            title: 'HELP',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            }
          }
          }
          name="Help" component={Help} />




        <Stack.Screen
          options={{
            title: 'SUPPORT',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            }
          }
          }
          name="Support" component={Support} />


        <Stack.Screen
          options={{
            title: 'ABOUT',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            }
          }
          }
          name="About" component={About} />

        <Stack.Screen
          options={{
            title: 'LOGOUT',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            }
          }
          }
          name="Logout" component={Logout} />
        <Stack.Screen
          options={{
            title: 'PetFit',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            }
          }
          }
          name="Drawscreen" component={DrawScreens} />

        <Stack.Screen
          options={{
            title: 'PetDetails',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            },
          }
          }
          name="petview" component={PetView} />
        <Stack.Screen
          options={{
            title: 'PetFit',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            },
          }
          }
          name="adminmenu" component={AdminMenu} />

        <Stack.Screen
          options={{
            title: 'ALL PRODUCTS',
            headerStyle: {
              backgroundColor: '#006699',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            },
          }
          }
          name="All Products" component={AllProducts} />


        <Stack.Screen
          options={{
            title: 'ADD PRODUCTS',
            headerStyle: {
              backgroundColor: '#006699',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            },
          }
          }
          name="Add Products" component={AddProducts} />

        <Stack.Screen
          options={{
            title: 'VIEW FEEDBACK',
            headerStyle: {
              backgroundColor: '#006699',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Calibri'
            },
          }
          }
          name="View Feedback" component={ViewFeedback} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavScreens;


