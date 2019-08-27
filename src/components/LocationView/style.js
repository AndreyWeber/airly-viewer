import createStyles, { dimensions } from '../../styles/base';

const locationViewStyles = createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.2)', // Check how to set values
        // width: '100%',
        width: dimensions.maxWidth,
        paddingVertical: 7
    }
});

export default locationViewStyles;
