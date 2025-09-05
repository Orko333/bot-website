import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Telegram } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const menuItems = [
    { label: 'Головна', id: 'hero' },
    { label: 'Про нас', id: 'about' },
    { label: 'Послуги', id: 'services' },
    { label: 'Ціни', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        color: 'white',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            onClick={() => scrollToSection(item.id)}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<Telegram />}
            href="https://t.me/Easy_Kyrsach_bot"
            target="_blank"
            sx={{
              background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1d4ed8 30%, #7c3aed 90%)',
              },
            }}
          >
            Відкрити бота
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Toolbar>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <img 
                src="/logo.png" 
                alt="Kyrsovuchok Logo" 
                style={{ 
                  width: 32, 
                  height: 32, 
                  borderRadius: '50%',
                  marginRight: 8 
                }}
                onError={(e) => {
                  e.currentTarget.src = "/logo.png";
                }}
              />
              Kyrsovuchok
            </Typography>
          </motion.div>
          
          <Box sx={{ flexGrow: 1 }} />

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    color="inherit"
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  variant="contained"
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
                  Відкрити бота
                </Button>
              </motion.div>
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
