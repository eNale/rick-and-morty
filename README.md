# Rick and Morty Assignment

## Requirements

1. NodeJS - v12 or newer
2. React Native cli - [react-native-cli](https://www.npmjs.com/package/react-native-cli) or access the current version at runtime using [npx](https://reactnative.dev/docs/environment-setup#react-native-command-line-interface)
3. Xcode (to run the app on iOS)
4. Android Studio (to run the app on Android)


## Getting started


### Install node modules

Run `npm install` from root directory

### Install pods (for iOS)

Run `pod install` from root/ios directory.

In case of conflicts with local pod repo run `pod install --repo-update`

### Run on simulators

1. Start server to serve React Native code
    * `react-native start` or `npm run start`
2. Start iOS simulator
    * `react-native run-ios` or (`npm run ios-11` or `npm run ios-8` for iPhone11/iPhone8)
3. Start Android emulator
    * `react-native run-android` or `npm run android`