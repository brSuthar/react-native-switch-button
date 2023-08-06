import React, {FC, memo} from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import {ISwitchButton} from './interface';
import {styles} from './styles';

const SwitchButton: FC<ISwitchButton> = (props: ISwitchButton) => {
  const {
    status,
    onSwitch,
    disable,
    onThumbColor,
    offThumbColor,
    disableThumbColor,
    onBgColor,
    offBgColor,
    disableBgColor,
  } = props;

  const style = useAnimatedStyle(() => {
    if (disable) {
      return {
        transform: [{translateX: withTiming(0)}],
        backgroundColor: disableThumbColor,
      };
    }
    return {
      transform: [{translateX: status ? withTiming(16) : withTiming(0)}],
      backgroundColor: status ? onThumbColor : offThumbColor,
    };
  });

  const bgStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: disable
        ? withTiming(disableBgColor || '#010B40')
        : status
        ? withTiming(onBgColor || '#1A73EB')
        : withTiming(offBgColor || '#010B40'),
    };
  });

  const onPress = () => {
    if (!disable) {
      onSwitch(!status);
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.8}
      style={styles.container}>
      <Animated.View style={[styles.view, bgStyle]}>
        <Animated.View style={[styles.circle, style]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

SwitchButton.defaultProps = {
  status: false,
  disable: false,
  onBgColor: '#1A73EB',
  offBgColor: '#010B40',
  onThumbColor: '#FFFFFFC0',
  offThumbColor: '#03318C',
  disableBgColor: '#010B40',
  disableThumbColor: '#03318C',
};

export default memo(SwitchButton);
