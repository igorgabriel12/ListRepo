Certainly! Here's the revised README for the "ListRepo" project in React Native CLI, with separate instructions for Android and iOS using Yarn:

---

# ListRepo - GitHub Repository Listing App

Welcome to ListRepo, a simple React Native app for listing GitHub repositories. This guide will provide step-by-step instructions on how to download, set up, and run this project on your Android or iOS device using the React Native CLI and Yarn.

## Prerequisites

Before you get started, make sure you have the following tools installed on your system:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- Yarn: [https://classic.yarnpkg.com/en/docs/install/](https://classic.yarnpkg.com/en/docs/install/)
- Git: [https://git-scm.com/](https://git-scm.com/)
- Android Studio (for Android): [https://developer.android.com/studio](https://developer.android.com/studio)
- Xcode (for iOS): Available on the App Store or [https://developer.apple.com/xcode/](https://developer.apple.com/xcode/)

## How to Set Up

1. Clone this repository to your system:

   ```
   git clone https://github.com/igorgabriel12/ListRepo.git
   ```

2. Navigate to the project directory:

   ```
   cd ListRepo
   ```

3. Install the dependencies using Yarn:

   ```
   yarn
   ```

## How to Run on Android

To run the app on Android, you'll need to set up the Android emulator or connect an Android device to your computer.

1. Start the Android emulator or connect your Android device to your computer.

2. Open a terminal in the project's root directory and run the following command:

   ```
   yarn android
   ```

This will build the app and start it on the Android emulator or device.

## How to Run on iOS

To run the app on iOS, you'll need a Mac and Xcode installed.

1. Open a terminal in the project's root directory and run the following command:

   ```
   cd ios
   ```

2. Install the iOS dependencies:

   ```
   pod install
   ```

3. Go back to the project's root directory:

   ```
   cd ..
   ```

4. Run the app on the iOS simulator:

   ```
   yarn ios
   ```

This will build the app and start it on the iOS simulator.

You should now have the ListRepo app up and running on your Android device or iOS simulator. You can explore and list GitHub repositories!

## Contribution

If you'd like to contribute to this project, feel free to fork it, make your changes, and submit a pull request. We look forward to collaborating with you!

## License

This project is licensed under the MIT License. Please see the [LICENSE](LICENSE) file for more details.

---

Feel free to customize this README to suit your project's needs. Make sure to include important information on how to use, set up, and contribute to your ListRepo app.
