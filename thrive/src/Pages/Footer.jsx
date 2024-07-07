import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f1f1f1' }}>
      <p>Created by The Pink Bees:
        <a href="https://www.linkedin.com/in/millennia-severino" target="_blank" rel="noopener noreferrer"> Millennia</a>,
        <a href="https://www.linkedin.com/in/zeinabwarsama/" target="_blank" rel="noopener noreferrer"> Zeinab</a>,
        <a href="https://www.linkedin.com/in/reneeibeji/" target="_blank" rel="noopener noreferrer"> Renee</a>
        {/* <a href="https://www.linkedin.com/in/name3" target="_blank" rel="noopener noreferrer"> Name3</a> */}
      </p>
    </footer>
  );
};

export default Footer;
