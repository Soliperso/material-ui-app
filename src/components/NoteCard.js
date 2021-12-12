import React from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { yellow, green, pink, blue } from '@mui/material/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category == 'work') {
        return yellow[700];
      }
      if (note.category == 'money') {
        return green[500];
      }
      if (note.category == 'todos') {
        return pink[500];
      }
      return blue[500];
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>}
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
}
