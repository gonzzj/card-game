import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            marginTop: theme.spacing(4),
        },
        divider: {
            marginTop: theme.spacing(2),
        }
    }),
);

export default useStyles;