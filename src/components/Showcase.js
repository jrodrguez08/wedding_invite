import React from 'react';
import { Box, Typography } from '@mui/material';

import { content } from '../constants/content';
import { colors } from '../constants/colors';

export const Showcase = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: "4rem"
      }}
    >
      <Box
        component="img"
        src="https://via.placeholder.com/400"
        alt="Wedding invite background"
        sx={{
            width: {xs: 250, sm: 250, md: 400},
            height: 'auto',
            maxHeight: {xs: 250, sm: 250, md: 400},
            border: '10px solid',
            borderColor: colors.tussok,
            borderRadius: 2,
            boxShadow: 3,
            padding: 1,
        }}
      />
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          marginTop: "2rem",
          fontSize: {xs: '2rem', sm: '2rem', md: '2.5rem'},
          padding: {xs: '0 1rem', sm: '0 1rem', md: '0 2rem'}
        }}
      >
        {content.showcase.text}
      </Typography>
    </Box>
  );
};
