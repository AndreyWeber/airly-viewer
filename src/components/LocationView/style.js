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
        backgroundColor: colors.transparentBackground,
        width: dimensions.relMaxWidth,
        paddingVertical: 7
    }
});

export default locationViewStyles;
