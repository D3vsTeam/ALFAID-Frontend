import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../hook/useAuth';
import { Splash } from '../screens';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

const Routes = () => {
  const { signed, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Splash />
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;