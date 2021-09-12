import React from 'react';

import { Text, View, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {

  const { setIsAuthenticated } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SignIn Screen!</Text>
      <Button title="Sign In" onPress={() => setIsAuthenticated(true)}></Button>
    </View>
  )
}

export default SignIn;