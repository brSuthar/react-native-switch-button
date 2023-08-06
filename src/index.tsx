/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './styles';
import SwitchButton from './switch-button';

function App(): JSX.Element {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SwitchButton onSwitch={setStatus} status={status} />
    </View>
  );
}

export default App;
