import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import LoginScreen from './pages/login';
import SignUpScreen from './pages/signup';
import MainScreen from './pages/main'
import ResultsScreen from './pages/results';
import ChatScreen from './pages/chat';
import ProfileScreen from './pages/profile';
import UpdateProfileScreen from './pages/updateProfile';
import UpdatePassScreen from './pages/updatePass';
import ComingSoonScreen from './pages/comingSoon';
import ForgotPassScreen from './pages/forgotPass';

import CustomDrawer from './pages/components/customDrawer'



const drawer = createDrawerNavigator(
    {
        Login: LoginScreen,
        SignUp: SignUpScreen,
        Main: MainScreen,
        Results: ResultsScreen,
        Chat: ChatScreen,
        Profile: ProfileScreen,
        UpdateProfile: UpdateProfileScreen,
        UpdatePass: UpdatePassScreen,       
        ComingSoon: ComingSoonScreen,
        ForgotPass: ForgotPassScreen,
    },
    {
        drawerType:'slide',
        
        contentComponent: CustomDrawer ,
        initialRouteName:'Login',
        //unmountInactiveRoutes: true, //Whether a screen should be unmounted when navigating away from it
        backBehavior:'history',
        
    }  
);

const appContainer = createAppContainer(drawer);

export default appContainer;

