import React from 'react';
import { Typography, Card, CardHeader, CardContent, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DeleteOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category == 'work') {
        return '3px solid blue';
      }
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
