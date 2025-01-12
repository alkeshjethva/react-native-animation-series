import { useEffect } from 'react';
import { Animated, useAnimatedValue } from 'react-native';

import { responsive } from '../../utils';

const START_SIZE = responsive.height(30);
const END_SIZE = responsive.height(40);
const DURATION = 1000;

const useZoomInOutAnimation = () => {
  const anim = useAnimatedValue(START_SIZE);

  const zoomOut = () => {
    Animated.timing(anim, {
      toValue: END_SIZE,
      duration: DURATION,
      useNativeDriver: false,
    }).start(finished => finished && zoomIn());
  };

  const zoomIn = () => {
    Animated.timing(anim, {
      toValue: START_SIZE,
      duration: DURATION,
      useNativeDriver: false,
    }).start(finished => finished && zoomOut());
  };

  useEffect(() => {
    zoomOut();
  }, [anim]);

  return { anim };
};

export default useZoomInOutAnimation;
