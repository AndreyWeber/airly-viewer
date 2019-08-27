import createStyles, { dimensions } from '../../styles/base';

const requireAndroidPermissionsStyles = createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100%',
        // height: '100%',
        width: dimensions.maxWidth,
        height: dimensions.maxHeight,
        backgroundColor: '#000000'
    },
    text: {
        color: '#ffffff',
        paddingBottom: 15
    }
});

export default requireAndroidPermissionsStyles;
