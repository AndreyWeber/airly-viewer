import createStyles, { dimensions } from '../../styles/base';

const measurementViewStyles = createStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        // width: '100%',
        // height: '100%',
        width: dimensions.maxWidth,
        height: dimensions.maxHeight,
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    bottom: {
        flexGrow: 0,
    },
    dateContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '40%'
    },
    rootFont: {
        color: '#ffffff',
        fontFamily: 'AvenirNext-DemiBold'
    },
    text: {
        fontSize: 15
    },
    level: {
        fontSize: 20
    },
    value: {
        fontSize: 60
    }
});

export default measurementViewStyles;
