import createStyles, { dimensions } from '../../styles/base';

const measurementViewStyles = createStyles({
    root: {
        display: 'flex',
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
        flexGrow: 0
    },
    dateContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '40%'
    }
});

export default measurementViewStyles;
