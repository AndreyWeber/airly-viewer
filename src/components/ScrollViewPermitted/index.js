import { ScrollView } from 'react-native';

import { requireAndroidPermissions } from '../../hoc';

const ScrollViewPermitted = requireAndroidPermissions(ScrollView);

export default ScrollViewPermitted;
