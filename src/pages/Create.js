import { Button, Container, Typography } from '@mui/material';

export default function Create() {
  return (
    <Container>
      <Typography variant='h6' color='textSecondary' component='h2' gutterBottom>
        Create a New Note
      </Typography>
      <Button type='submit' variant='contained' color='secondary'>
        Submit
      </Button>
    </Container>
  );
}
