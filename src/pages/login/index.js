import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Login(props) {
  const { t } = useTranslation();
  return (
    <Container>
      <Box>
      <Navbar />
      <Footer />
      
      </Box>
    </Container>
  );
}
