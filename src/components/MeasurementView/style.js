import createStyles, {
    dimensions,
    colors,
    fonts
} from '../../styles/base';

const measurementViewStyles = createStyles({
    root: {
        display: 'flex',
        width: dimensions.maxWidth,
        height: dimensions.maxHeight,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '40%'
    },
    text: {
        color: colors.text,
        fontFamily: fonts.primary,
        fontSize: fonts.small
    },
    level: {
        color: colors.text,
        fontFamily: fonts.primary,
        fontSize: fonts.medium
    },
    value: {
        color: colors.text,
        fontFamily: fonts.primary,
        fontSize: fonts.large
    }
});

export default measurementViewStyles;
