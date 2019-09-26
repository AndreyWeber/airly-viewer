import createStyles, { dimensions } from '../../styles/base';

const layoutViewStyles = createStyles({
    root: {
        display: 'flex',
        width: dimensions.maxWidth,
        height: dimensions.maxHeight
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1 // 'body' area must be bigger than 'bottom' area
    },
    bottom: {
        flexGrow: 0 // 'bottom' area must be lesser than 'body arae'
    }
});

export default layoutViewStyles;
