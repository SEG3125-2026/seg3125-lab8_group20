import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/homescreen';
import ClassSchedulesScreen from '../screens/class_schedules';
import ClassOverviewScreen from '../screens/classoverview';
import BalletScreen from '../screens/ballet';
import TapScreen from '../screens/tap';
import JazzScreen from '../screens/jazz';
import HiphopScreen from '../screens/hiphop';
import LyricalScreen from '../screens/lyrical';
import OurClassesScreen from '../screens/ourclasses';
import OurIntructorsScreen from '../screens/ourinstructors';
import ContactScreen from '../screens/contact';
import LeaveAReviewScreen from '../screens/leaveareview';
import RegisterScreen from '../screens/register';

const HomeStack = createNativeStackNavigator({
    screens:{
        Home: {
        screen: HomeScreen,
        },
        ClassSchedule: {
        screen: ClassSchedulesScreen,
        },
        OurClasses: {
        screen: OurClassesScreen,
        },
        ClassOverview: {
        screen: ClassOverviewScreen,
        },
        Ballet: {
        screen: BalletScreen,
        },
        Tap: {
        screen: TapScreen,
        },
        Jazz: {
        screen: JazzScreen,
        },
        HipHop: {
        screen: HiphopScreen,
        },
        Lyrical: {
        screen: LyricalScreen,
        },
        OurInstructors: {
        screen: OurIntructorsScreen ,
        },
         Contact:{
         screen: ContactScreen,
         },
         LeaveAReview: {
         screen: LeaveAReviewScreen,
         },
        Register: {
            screen: RegisterScreen,
        }
    }
});

export const Navigation = createStaticNavigation(HomeStack);