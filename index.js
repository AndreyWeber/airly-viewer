/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Ignore specific yellowbox warnings
// YellowBox.ignoreWarnings([
//     'Require cycle:',
//     'Remote debugger'
// ]);

// // override console.warn()
// if (__DEV__) {
//     const IGNORED_WARNINGS = [
//         'Remote debugger is in a background tab which may cause apps to perform slowly',
//         'Require cycle:'
//     ];

//     const oldConsoleWarn = console.warn;

//     console.warn = (...args) => {
//         if (
//             typeof args[0] === 'string' &&
//             IGNORED_WARNINGS.some(ignoredWarning => args[0].startsWith(ignoredWarning))
//         ) {
//             return;
//         }

//         return oldConsoleWarn.apply(console, args);
//     };
// }

AppRegistry.registerComponent(appName, () => App);
