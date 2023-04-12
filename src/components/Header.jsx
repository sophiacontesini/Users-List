import React from 'react';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <header>
      <Typography
        variant='h2'
        color='secondary'
        mt={4}
        align='center'
      >
        Colab Users List
      </Typography>
    </header>
  );
}
