import React, { memo } from 'react';
import { View, Animated } from 'react-native';

import images from '../../media';
import useStyles from './styles';
import useZoomInOutAnimation from './useZoomInOutAnimation';

const UpDownAnimation = () => {
  const { anim } = useZoomInOutAnimation();
  const styles = useStyles();

  return (
    <View style={styles.wrapper}>
      <Animated.Image
        source={images.headphone}
        style={{ height: anim, width: anim }}
      />
    </View>
  );
};

export default memo(UpDownAnimation);
