import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Home(props) {
  const { t } = useTranslation();
  return (
    <Container>
      <Box>
        <Typography variant="h1">{t('home:title')}</Typography>
      </Box>
    </Container>
  );
}
