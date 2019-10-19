import createStyles, { dimensions } from '../../styles/base';

const layoutViewStyles = createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: dimensions.relMaxWidth,
        height: dimensions.relMaxHeight
    },
    body: {
        // borderWidth: 2,
        // borderColor: 'red',
        height: '80%',
        flexGrow: 1 // 'body' area must be higher than 'bottom' area
    },
    bottom: {
        // borderWidth: 2,
        // borderColor: 'yellow',
        flexGrow: 0 // 'bottom' area must be less high than 'body arae'
    }
});

export default layoutViewStyles;
