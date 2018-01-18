import React from 'react';
import { Text, View } from 'react-native';
import { Tile } from 'react-native-elements';

export default props => {
  const { name, description, roaster } = props.navigation.state.params;

  return (
    <View>
      <Tile
        imageSrc={require('../assets/icon-512.png')}
        title={name}
        featured
        caption={roaster}
      />
      <Text>{description}</Text>
    </View>
  );
};
