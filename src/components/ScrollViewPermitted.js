import { ScrollView } from 'react-native';
import requireAndroidPermissions from '../hoc/requireAndroidPermissions';

const ScrollViewPermitted = requireAndroidPermissions(ScrollView);

export default ScrollViewPermitted;
