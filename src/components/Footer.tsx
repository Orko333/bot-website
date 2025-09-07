import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import {
  Telegram,
  Email,
  Phone,
  Instagram,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Telegram />, url: 'https://t.me/Easy_Kyrsach_bot', label: 'Telegram' },
    { icon: <Instagram />, url: 'https://www.instagram.com/kyrsovuchok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Головна', href: '#hero' },
    { label: 'Про нас', href: '#about' },
    { label: 'Послуги', href: '#services' },
    { label: 'Ціни', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
        py: 8,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
              gap: 6,
              mb: 6,
            }}
          >
            {/* Brand Section */}
            <Box sx={{ gridColumn: { xs: '1', md: '1 / 3' } }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                📚 Kyrsovuchok
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: 400,
                }}
              >
                Ваш надійний помічник у навчанні. Ми допомагаємо студентам досягати академічних успіхів
                через якісні навчальні роботи та професійну підтримку.
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
                }}
              >
                Почати роботу
              </Button>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                Швидкі посилання
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {quickLinks.map((link, index) => (
                  <Typography
                    key={index}
                    component="button"
                    onClick={() => scrollToSection(link.href)}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      fontSize: '1rem',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': {
                        color: '#3b82f6',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Contact Info */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                Контакти
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Telegram sx={{ color: '#3b82f6', fontSize: '1.25rem' }} />
                  <Typography
                    component="a"
                    href="https://t.me/Easy_Kyrsach_bot"
                    target="_blank"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': { color: '#3b82f6' },
                    }}
                  >
                    @Easy_Kyrsach_bot
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Email sx={{ color: '#3b82f6', fontSize: '1.25rem' }} />
                  <Typography
                    component="a"
                    href="mailto:kyrsovuchok@gmail.com"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': { color: '#3b82f6' },
                    }}
                  >
                    kyrsovuchok@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Phone sx={{ color: '#3b82f6', fontSize: '1.25rem' }} />
                  <Typography sx={{ color: 'text.secondary' }}>
                    24/7 через Telegram
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Social Links */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              Слідкуйте за нами
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
              {socialLinks.map((social, index) => (
                <Box
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#3b82f6',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background: '#3b82f6',
                      color: 'white',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 4 }} />

          {/* Bottom Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center', // Змінено для центрування
              alignItems: 'center',
              gap: 3,
              textAlign: 'center', // Додано для центрування тексту
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
              }}
            >
              © 2025 Kyrsovuchok. Всі права захищено. Створено з ❤️ для студентів.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-end' },
              }}
            >
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;