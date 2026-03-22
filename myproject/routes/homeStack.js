import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/homescreen';
import ClassSchedulesScreen from '../screens/class_schedules';
import ClassOverviewScreen from '../screens/classoverview';
import OurClassesScreen from '../screens/ourclasses';
import OurIntructorScreen from '../screens/ourinstructors';
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
        // ClassOverview: {
        // screen: ClassOverviewScreen,
        // },
        // OurInstructor: {
        // screen: OurIntructorScreen,
        // },
        // Contact:{
        // screen: ContactScreen,
        // },
        // LeaveAReview: {
        // screen: LeaveAReviewScreen,
        // },
        Register: {
            screen: RegisterScreen,
        },
    }
});

export const Navigation = createStaticNavigation(HomeStack);