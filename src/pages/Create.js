import React, { useState } from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  btn: {
    marginTop: 30,
  },
});

const Create = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('');

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
    <Container>
      <Typography variant='h6' component='h2' color='textSecondary'>
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          style={{ marginTop: '20px' }}
          label='Title'
          size='small'
          color='secondary'
          variant='outlined'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          style={{ marginTop: '20px', marginBottom: '20px' }}
          label='Note Title'
          color='secondary'
          multiline
          rows={4}
          variant='outlined'
          fullWidth
          required
          error={detailsError}
        />

        <FormLabel component='legend' style={{ marginTop: '20px' }}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel label='Money' value='money' control={<Radio />} />
            <FormControlLabel label='Todos' value='todos' control={<Radio />} />
            <FormControlLabel label='Reminders' value='reminders' control={<Radio />} />
            <FormControlLabel label='Work' value='work' control={<Radio />} />
          </RadioGroup>
        </FormLabel>

        <Button
          type='submit'
          className={classes.btn}
          variant='contained'
          color='secondary'
          endIcon={<SendOutlinedIcon />}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Create;
