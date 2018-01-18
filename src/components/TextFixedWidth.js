import React from 'react';
import { View, Text, Platform } from 'react-native';

export default props => {
  const fontFamily = Platform.OS === 'ios' ? 'Helvetica Neue' : 'monospace';

  return <Text style={[{ fontFamily }, props.style]}>{props.children}</Text>;
};
