import createStyles, { dimensions } from '../../styles/base';

const loaderStyles = createStyles({
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
    indicator: {
        paddingTop: 10,
        fontSize: 15,
        color: '#c0c0c0'
    }
});

export default loaderStyles;
