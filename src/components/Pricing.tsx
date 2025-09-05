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
  CheckCircle,
  Telegram,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      icon: <MenuBook />,
      title: 'Курсова робота',
      basePrice: 1500,
      priceUnit: '+ 50 грн/сторінка',
      description: 'Професійне написання курсових робіт з будь-яких дисциплін',
      features: [
        'Унікальність 100%',
        'Безкоштовні правки',
        'Термін 7-14 днів',
        'Список літератури',
        'Плагіат-перевірка',
      ],
      popular: true,
    },
    {
      icon: <Science />,
      title: 'Лабораторна робота',
      basePrice: 300,
      priceUnit: '+ 100 грн/робота',
      description: 'Виконання лабораторних робіт з точних наук',
      features: [
        'Детальні розрахунки',
        'Графіки та схеми',
        'Швидке виконання',
        'Пояснення ходу роботи',
        'Висновки',
      ],
      popular: false,
    },
    {
      icon: <Assessment />,
      title: 'Реферат',
      basePrice: 500,
      priceUnit: '+ 30 грн/сторінка',
      description: 'Якісно написані реферати з різних дисциплін',
      features: [
        'Унікальний контент',
        'Список літератури',
        'Оформлення за ДСТУ',
        'Швидке виконання',
        'Безкоштовні правки',
      ],
      popular: false,
    },
    {
      icon: <Code />,
      title: 'Контрольна робота',
      basePrice: 400,
      priceUnit: '+ 80 грн/робота',
      description: 'Виконання контрольних робіт з різних предметів',
      features: [
        'Детальні рішення',
        'Пояснення ходу',
        'Перевірка результатів',
        'Швидке виконання',
        'Консультації',
      ],
      popular: false,
    },
    {
      icon: <Assessment />,
      title: 'Інше',
      basePrice: 200,
      priceUnit: '+ 40 грн/сторінка',
      description: 'Індивідуальні замовлення та нестандартні роботи',
      features: [
        'Індивідуальний підхід',
        'Обговорення деталей',
        'Гнучкі терміни',
        'Унікальне рішення',
        'Повна підтримка',
      ],
      popular: false,
    },
  ];

  return (
    <Box
      id="pricing"
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
              Прозорі ціни
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              Базові розцінки на наші послуги. Фінальна вартість залежить від складності та термінів виконання.
            </Typography>
            <Chip
              label="💰 Без прихованих платежів"
              sx={{
                background: 'linear-gradient(45deg, #10b981 30%, #059669 90%)',
                color: 'white',
                fontWeight: 600,
              }}
            />
          </Box>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  background: plan.popular 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
                    : 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: plan.popular 
                    ? '2px solid rgba(59, 130, 246, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: plan.popular 
                      ? '0 25px 50px rgba(59, 130, 246, 0.2)'
                      : '0 25px 50px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                {plan.popular && (
                  <Chip
                    label="⭐ Популярно"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      px: 2,
                      py: 1,
                    }}
                  />
                )}
                
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      color: '#3b82f6',
                      mb: 2,
                      '& svg': { fontSize: '2.5rem' },
                      textAlign: 'center',
                    }}
                  >
                    {plan.icon}
                  </Box>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'text.primary',
                      textAlign: 'center',
                    }}
                  >
                    {plan.title}
                  </Typography>
                  
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: '#3b82f6',
                        mb: 1,
                      }}
                    >
                      {plan.basePrice} ₴
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                      }}
                    >
                      {plan.priceUnit}
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      textAlign: 'center',
                      lineHeight: 1.6,
                    }}
                  >
                    {plan.description}
                  </Typography>
                  
                  <Box sx={{ mb: 4, flexGrow: 1 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                          color: 'text.secondary',
                        }}
                      >
                        <CheckCircle
                          sx={{
                            color: '#10b981',
                            mr: 2,
                            fontSize: '1.25rem',
                          }}
                        />
                        <Typography variant="body2">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  
                  <Button
                    variant={plan.popular ? 'contained' : 'outlined'}
                    fullWidth
                    size="large"
                    startIcon={<Telegram />}
                    href="https://t.me/Easy_Kyrsach_bot"
                    target="_blank"
                    sx={{
                      mt: 'auto',
                      py: 2,
                      ...(plan.popular ? {
                        background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1d4ed8 30%, #7c3aed 90%)',
                          transform: 'translateY(-2px)',
                        },
                      } : {
                        borderColor: '#3b82f6',
                        color: '#3b82f6',
                        '&:hover': {
                          borderColor: '#1d4ed8',
                          background: 'rgba(59, 130, 246, 0.1)',
                        },
                      }),
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Замовити зараз
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
          <Box
            sx={{
              mt: 8,
              p: 6,
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
              borderRadius: 3,
              border: '1px solid rgba(16, 185, 129, 0.2)',
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
              💡 Важлива інформація
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
              }}
            >
              Це орієнтовні ціни. Фінальна вартість залежить від складності, термінів та особливих вимог. 
              Для отримання точної вартості - напишіть нам в боті з описом вашого завдання.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Telegram />}
              href="https://t.me/Easy_Kyrsach_bot"
              target="_blank"
              sx={{
                background: 'linear-gradient(45deg, #10b981 30%, #059669 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #047857 30%, #065f46 90%)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out',
                px: 4,
                py: 2,
              }}
            >
              Дізнатися точну ціну
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Pricing;
