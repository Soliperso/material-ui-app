import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Button,
  TextField,
  Typography,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const useStyles = makeStyles({
  paper: {
    padding: '20px',
    marginTop: '20px',
  },
  container: {
    minHeight: '100vh',
    marginTop: 40,
  },
  field: {
    marginBottom: 20,
    marginTop: 20,
    display: 'block',
    alignItems: 'center',
  },
});

const Create = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (!title) setTitleError(true);
    if (!details) setDetailsError(true);

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate('/'));
    }

    setTitle('');
    setDetails('');
  };

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} variant='h6' component='h2' color='textSecondary'>
        Create a New Note
      </Typography>

      <Paper elevation={1} className={classes.paper}>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: 20 }}
            label='Title'
            variant='standard'
            size='small'
            fullWidth
            required
            error={titleError}
          />
          <TextField
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            style={{ marginBottom: 20 }}
            label='Details'
            variant='outlined'
            size='small'
            multiline
            rows={5}
            fullWidth
            required
            error={detailsError}
          />

          <FormControl className={classes.field} fullWidth>
            <FormLabel component='legend'>Note Category</FormLabel>
            <RadioGroup row value={category} onChange={(e) => setCategory(e.target.value)}>
              <FormControlLabel value='money' control={<Radio size='small' />} label='Money' />
              <FormControlLabel value='todos' control={<Radio size='small' />} label='Todos' />
              <FormControlLabel
                value='reminders'
                control={<Radio size='small' />}
                label='Reminders'
              />
              <FormControlLabel value='work' control={<Radio size='small' />} label='Work' />
            </RadioGroup>
          </FormControl>

          <Button type='submit' variant='contained' endIcon={<SendOutlinedIcon />}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Create;
