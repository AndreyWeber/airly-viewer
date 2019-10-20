import createStyles, {
    dimensions,
    icons,
    colors
} from '../../styles/base';

export const iconStyle = {
    size: icons.size,
    color: colors.icon
};

const locationViewStyles = createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: dimensions.relMaxWidth,
        paddingVertical: 10
    },
    caption: {
        paddingLeft: 5
    }
});

export default locationViewStyles;
