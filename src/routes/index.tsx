import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../hook/useAuth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

const Routes = () => {
  const { signed, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="#666" />
      </View>
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;