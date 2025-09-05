import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  Telegram,
  Speed,
  Security,
  Support,
  Stars,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const features = [
    {
      icon: <Speed />,
      title: 'Швидко',
      description: 'Виконання за 7-14 днів',
    },
    {
      icon: <Security />,
      title: 'Конфіденційно',
      description: 'Повна анонімність',
    },
    {
      icon: <Support />,
      title: 'Підтримка 24/7',
      description: 'Завжди на зв\'язку',
    },
    {
      icon: <Stars />,
      title: 'Якісно',
      description: 'Унікальність 100%',
    },
  ];

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `
            radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ mb: 3 }}>
              <Chip
                label="🎓 Найкращий помічник студента"
                sx={{
                  background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
                  color: 'white',
                  fontWeight: 600,
                  mb: 2,
                }}
              />
            </Box>
            
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                background: 'linear-gradient(45deg, #f8fafc 30%, #cbd5e1 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2,
              }}
            >
              Твій особистий
              <br />
              <span style={{ color: '#3b82f6' }}>StudyBot</span>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                lineHeight: 1.6,
                maxWidth: 600,
              }}
            >
              Професійна допомога у написанні курсових, лабораторних робіт та інших навчальних проектів. 
              Швидко, якісно, конфіденційно!
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 6, justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Telegram />}
                href="https://t.me/YourBotUsername"
                target="_blank"
                sx={{
                  background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1d4ed8 30%, #7c3aed 90%)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                  px: 4,
                  py: 2,
                }}
              >
                Розпочати роботу
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  const element = document.getElementById('pricing');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  borderColor: '#3b82f6',
                  color: '#3b82f6',
                  '&:hover': {
                    borderColor: '#1d4ed8',
                    background: 'rgba(59, 130, 246, 0.1)',
                  },
                  px: 4,
                  py: 2,
                }}
              >
                Дізнатись ціни
              </Button>
            </Box>
          </motion.div>

          {/* Bot illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '6rem',
                position: 'relative',
                mb: 6,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -10,
                  left: -10,
                  right: -10,
                  bottom: -10,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  opacity: 0.3,
                  animation: 'pulse 2s infinite',
                },
                '@keyframes pulse': {
                  '0%': {
                    transform: 'scale(1)',
                    opacity: 0.3,
                  },
                  '50%': {
                    transform: 'scale(1.1)',
                    opacity: 0.1,
                  },
                  '100%': {
                    transform: 'scale(1)',
                    opacity: 0.3,
                  },
                },
              }}
            >
              🤖
            </Box>
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ width: '100%' }}
          >
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
              {features.map((feature, index) => (
                <Card
                  key={index}
                  sx={{
                    background: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '100%',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Box
                      sx={{
                        color: '#3b82f6',
                        mb: 2,
                        '& svg': { fontSize: '2rem' },
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
