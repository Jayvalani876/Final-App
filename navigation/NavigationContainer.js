import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { NavigationStack } from './NavigationStack';

export const NavContainer = () => {
    return (
        <NavigationContainer>
            <NavigationStack />
        </NavigationContainer>
    );
}