import { Button, Container, Typography } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { makeStyles } from '@mui/styles';

// Create custom CSS styles using makeStyles hook
const useStyles = makeStyles({
  btn: {
    fontSize: 40,
    backgroundColor: 'violet',

    '&:hover': {
      backgroundColor: '#00ff00',
    },
  },
  title: {
    fontSize: 40,
    textDecoration: 'underline',
  },
});

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        className={classes.title}
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        type='submit'
        className={classes.btn}
        variant='contained'
        color='secondary'
        endIcon={<SendOutlinedIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
