import React, { useState } from 'react';
import { Container, TextField, Typography, Button } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Create = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === '') setTitleError(true);
    if (details === '') setDetailsError(true);

    if (title && details) console.log(title, details);

    setTitle('');
    setDetails('');
  };

  return (
    <Container>
      <Typography variant='h6' mt={2} component='h2' color='textSecondary'>
        Create a New Note
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: 1, marginTop: 20 }}
          label='Title'
          variant='outlined'
          required
          fullWidth
          error={titleError}
        />
        <TextField
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          style={{ marginBottom: 20, marginTop: 20 }}
          label='Details'
          variant='outlined'
          multiline
          rows={4}
          required
          fullWidth
          error={detailsError}
        />
        <Button type='submit' color='primary' variant='contained' endIcon={<SendOutlinedIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
