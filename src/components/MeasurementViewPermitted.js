import MeasurementView from './MeasurementView';

import { requireAndroidPermissions } from '../hoc';

const MeasurementViewPermitted = requireAndroidPermissions(MeasurementView);

export default MeasurementViewPermitted;
