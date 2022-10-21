import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function favorite() {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="add-favorite" label="Add Favorite" variant="standard" />
    </Box>
  );
}
