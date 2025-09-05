import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  AutoAwesome,
  Psychology,
  School,
  VerifiedUser,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const advantages = [
    {
      icon: <AutoAwesome />,
      title: 'Індивідуальний підхід',
      description: 'Кожна робота виконується з урахуванням ваших особливих вимог та побажань.',
    },
    {
      icon: <Psychology />,
      title: 'Досвідчені автори',
      description: 'Наша команда складається з кваліфікованих спеціалістів з різних галузей.',
    },
    {
      icon: <School />,
      title: 'Широкий спектр дисциплін',
      description: 'Виконуємо роботи з математики, фізики, програмування, економіки та багато іншого.',
    },
    {
      icon: <VerifiedUser />,
      title: 'Гарантія якості',
      description: 'Надаємо гарантію на всі виконані роботи та безкоштовні правки.',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
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
            >
              Про Kyrsovuchok
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Ми - команда професіоналів, які допомагають студентам досягати академічних успіхів. 
              Kyrsovuchok створений для того, щоб зробити процес замовлення навчальних робіт максимально простим та зручним.
              Працюємо швидко, якісно та з повною конфіденційністю.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  background: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      color: '#3b82f6',
                      mb: 3,
                      '& svg': { fontSize: '3rem' },
                    }}
                  >
                    {advantage.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {advantage.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {advantage.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 6,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              borderRadius: 3,
              border: '1px solid rgba(59, 130, 246, 0.2)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              🎯 Наша місія
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Зробити навчальний процес більш ефективним та менш стресовим для студентів. 
              Ми віримо, що кожен студент заслуговує на якісну підтримку у своєму академічному шляху.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
