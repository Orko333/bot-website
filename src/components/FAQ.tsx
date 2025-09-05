import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import {
  ExpandMore,
  Telegram,
  Security,
  Payment,
  Edit,
  Schedule,
  VerifiedUser,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>('guarantees');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      id: 'guarantees',
      icon: <VerifiedUser />,
      question: 'Які гарантії?',
      answer: 'Ми гарантуємо унікальність кожної роботи та її відповідність вашим вимогам. Усі роботи проходять перевірку на плагіат. Якщо будуть потрібні правки, ми внесемо їх безкоштовно протягом гарантійного періоду.',
    },
    {
      id: 'payment',
      icon: <Payment />,
      question: 'Як відбувається оплата?',
      answer: 'Оплата відбувається у два етапи: 50% передоплати для початку роботи та 50% після того, як робота буде готова. Реквізити для оплати вам надасть менеджер.',
    },
    {
      id: 'revisions',
      icon: <Edit />,
      question: 'Що робити, якщо потрібні правки?',
      answer: 'Якщо вам або вашому викладачу знадобляться правки, ми внесемо їх безкоштовно. Просто повідомте про це вашого менеджера та надайте список необхідних змін.',
    },
    {
      id: 'deadlines',
      icon: <Schedule />,
      question: 'Які терміни виконання?',
      answer: 'Стандартний термін виконання курсової роботи – від 7 до 14 днів. Однак ми можемо виконати роботу і в коротші терміни за додаткову плату. Усі терміни обговорюються індивідуально.',
    },
    {
      id: 'privacy',
      icon: <Security />,
      question: 'Чи конфіденційно це?',
      answer: 'Так, ми гарантуємо повну конфіденційність. Ваші особисті дані та деталі замовлення ніколи не будуть передані третім особам. Усі наші співробітники підписують угоду про нерозголошення.',
    },
  ];

  return (
    <Box
      id="faq"
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
            >
              Часті запитання
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
              Відповіді на найпоширеніші питання наших клієнтів
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                sx={{
                  mb: 2,
                  background: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px !important',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: '0 0 16px 0',
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore 
                      sx={{ 
                        color: '#3b82f6',
                        transition: 'transform 0.3s ease-in-out',
                      }} 
                    />
                  }
                  sx={{
                    minHeight: 72,
                    '&.Mui-expanded': {
                      minHeight: 72,
                    },
                    '& .MuiAccordionSummary-content': {
                      margin: '20px 0',
                      alignItems: 'center',
                      '&.Mui-expanded': {
                        margin: '20px 0',
                      },
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        color: '#3b82f6',
                        '& svg': { fontSize: '1.5rem' },
                      }}
                    >
                      {faq.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    pb: 3,
                    pt: 0,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      ml: 5,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
              🤔 Залишились питання?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Не знайшли відповідь на своє питання? Напишіть нам в боті, і наш менеджер 
              відповість вам протягом 15 хвилин!
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
            >
              Задати питання
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQ;
