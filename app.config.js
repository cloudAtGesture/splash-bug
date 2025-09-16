module.exports = {
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          compileSdkVersion: 35,
          targetSdkVersion: 35,
          buildToolsVersion: '35.0.0',
        },
        ios: {
          deploymentTarget: '15.1',
        },
      },
    ],
    'expo-video',
    'expo-router',
    '@bugsnag/plugin-expo-eas-sourcemaps',
    '@config-plugins/react-native-blob-util',
    '@config-plugins/react-native-pdf',
    [
      'expo-font',
      {
        fonts: [
          'assets/fonts/NeueHaasDisplay-Roman.ttf',
          'assets/fonts/NeueHaasDisplay-Light.ttf',
          'assets/fonts/NeueHaasDisplay-Mediu.ttf',
        ],
      },
    ],
    [
      'expo-splash-screen',
      {
        ios: {
          backgroundColor: '#FFFFFF',
          image: './assets/images/gesture-splash.png',
          resizeMode: 'cover',
          enableFullScreenImage_legacy: true,
        },
        android: {
          backgroundColor: '#FFFFFF',
          image: './assets/images/gesture-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
        },
      },
    ],
  ],
};
