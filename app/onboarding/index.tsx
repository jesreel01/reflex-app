import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import { ButtonIcon } from '~/components/ui/button-icon';

const { width: SCREEN_WIDTH } = Dimensions.get('window');


const AnimatedView = Animated.createAnimatedComponent(View);

const ONBOARDING_PAGES = [
  {
    title: 'Welcome to Smart Mirror',
    description: 'Your personal assistant for a smarter lifestyle.',
    image:"",
  },
  {
    title: 'Personalized Experience',
    description: 'Customize your mirror to show what matters most to you.',
    image: "",
  },
  {
    title: 'Stay Connected',
    description: 'Get updates, notifications, and control your smart home devices.',
    image: "",
  },
];

interface OnboardingPageProps {
  title: string;
  description: string;
  image: any;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const OnboardingPage = ({ title, description, image, index, translateX }: OnboardingPageProps) => {
  const pageOffset = index * SCREEN_WIDTH;

  const rStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      'clamp'
    );

    const translateY = interpolate(
      translateX.value,
      inputRange,
      [100, 0, 100],
      'clamp'
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  return (
    <AnimatedView
      style={[rStyle, { width: SCREEN_WIDTH }]}
      className="flex-1 items-center justify-center px-6"
    >
      <Animated.Image
        source={image}
        style={[styles.image, rStyle]}
        resizeMode="contain"
      />
      <Text className="text-3xl font-bold mb-4 text-center">
        {title}
      </Text>
      <Text className="text-lg text-center text-gray-600">
        {description}
      </Text>
      <View className='mt-5'>
            <ButtonIcon className="w-16 h-16" iconName='arrow-forward-outline' />
      </View>
    </AnimatedView>
  );
};

const Onboarding = () => {
  const translateX = useSharedValue(0);
  const scrollRef = useRef(null);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <View className="flex-1 bg-white">
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {ONBOARDING_PAGES.map((page, index) => (
          <OnboardingPage
            key={index}
            {...page}
            index={index}
            translateX={translateX}
          />
        ))}
      </Animated.ScrollView>
      <PaginationDots
        translateX={translateX}
        pageCount={ONBOARDING_PAGES.length}
      />
    </View>
  );
};

interface PaginationDotsProps {
  translateX: Animated.SharedValue<number>;
  pageCount: number;
}

const PaginationDots = ({ translateX, pageCount }: PaginationDotsProps) => {
  return (
    <View className="flex-row justify-center items-center absolute bottom-10 left-0 right-0">
      {Array(pageCount)
        .fill(0)
        .map((_, index) => {
          const dotStyle = useAnimatedStyle(() => {
            const inputRange = [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH,
            ];

            const width = interpolate(
              translateX.value,
              inputRange,
              [8, 16, 8],
              'clamp'
            );

            const opacity = interpolate(
              translateX.value,
              inputRange,
              [0.5, 1, 0.5],
              'clamp'
            );

            return {
              width,
              opacity,
            };
          });

          return (
            <AnimatedView
              key={index}
              className="h-2 rounded-full bg-blue-500 mx-1"
              style={dotStyle}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_WIDTH * 0.8,
    marginBottom: 20,
  },
});

export default Onboarding;
