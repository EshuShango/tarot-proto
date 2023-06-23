// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Tarot App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
