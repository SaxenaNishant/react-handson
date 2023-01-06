import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function About(props) {
  const { t } = useTranslation();
  return (
    <Container>
      <Box>
        <Typography variant="h1">{t('about:title')}</Typography>
      </Box>
    </Container>
  );
}
