import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import {
  MenuBook,
  Science,
  Code,
  Assessment,
  Telegram,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: <MenuBook />,
      title: 'Курсові роботи',
      description: 'Написання курсових робіт з будь-яких дисциплін від 20 до 100 сторінок',
      features: ['Унікальність 100%', 'Термін 7-14 днів', 'Безкоштовні правки'],
      popular: true,
    },
    {
      icon: <Science />,
      title: 'Лабораторні роботи',
      description: 'Виконання лабораторних робіт з фізики, хімії, біології та інших наук',
      features: ['Детальні розрахунки', 'Графіки та схеми', 'Швидке виконання'],
      popular: false,
    },
    {
      icon: <Assessment />,
      title: 'Реферати',
      description: 'Якісно написані реферати з різних дисциплін',
      features: ['Унікальний контент', 'Список літератури', 'Швидке виконання'],
      popular: false,
    },
    {
      icon: <Code />,
      title: 'Контрольні роботи',
      description: 'Виконання контрольних робіт з математики, фізики та інших предметів',
      features: ['Детальні рішення', 'Пояснення ходу', 'Перевірка результатів'],
      popular: false,
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
              className="gradient-text-advanced text-glow"
            >
              Наші послуги
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Широкий спектр академічних послуг для студентів всіх рівнів навчання
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  background: service.popular 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
                    : 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: service.popular 
                    ? '1px solid rgba(59, 130, 246, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: service.popular 
                      ? '0 25px 50px rgba(59, 130, 246, 0.2)'
                      : '0 25px 50px rgba(0, 0, 0, 0.3)',
                  },
                }}
                className={`card-hover glass-advanced transform-3d ${service.popular ? 'neon-glow' : 'hover-lift'} floating`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {service.popular && (
                  <Chip
                    label="Популярно"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                    }}
                    className="sparkle pulse-glow bounce"
                  />
                )}
                
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      color: '#3b82f6',
                      mb: 3,
                      '& svg': { fontSize: '3rem' },
                    }}
                    className="pulse-glow floating"
                  >
                    {service.icon}
                  </Box>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    {service.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                          color: 'text.secondary',
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#3b82f6',
                            mr: 2,
                          }}
                        />
                        <Typography variant="body2">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  
                  <Button
                    variant={service.popular ? 'contained' : 'outlined'}
                    fullWidth
                    startIcon={<Telegram />}
                    href="https://t.me/Easy_Kyrsach_bot"
                    target="_blank"
                    sx={{
                      mt: 'auto',
                      ...(service.popular ? {
                        background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1d4ed8 30%, #7c3aed 90%)',
                        },
                      } : {
                        borderColor: '#3b82f6',
                        color: '#3b82f6',
                        '&:hover': {
                          borderColor: '#1d4ed8',
                          background: 'rgba(59, 130, 246, 0.1)',
                        },
                      }),
                    }}
                    className={`btn-hover ripple-effect hover-lift ${service.popular ? 'sparkle neon-glow' : 'glass-advanced'}`}
                  >
                    Замовити
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: 'text.primary',
                fontWeight: 600,
              }}
            >
              Не знайшли потрібну послугу?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Напишіть нам в боті, і ми обговоримо можливість виконання вашого індивідуального замовлення
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Telegram />}
              href="https://t.me/Easy_Kyrsach_bot"
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
              className="btn-hover sparkle ripple-effect hover-lift neon-glow pulse-glow"
            >
              Зв'язатися з нами
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
