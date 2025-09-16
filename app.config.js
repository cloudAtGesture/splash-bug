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
      'expo-splash-screen',
      {
        ios: {
          backgroundColor: '#FFFFFF',
          image: './assets/images/splash.png',
          resizeMode: 'cover',
          enableFullScreenImage_legacy: true,
        },
        android: {
          backgroundColor: '#FFFFFF',
          image: './assets/images/icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
        },
      },
    ],
  ],
};
