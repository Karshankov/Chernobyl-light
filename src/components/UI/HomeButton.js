import React from 'react';
import Dropdown from './dropdown/Dropdown';

const PowerButton = () => {
  const options = [
    { path: '/blog', label: 'Люди' },
    { path: '/village', label: 'Деревни' },
    { path: '/history', label: 'История' },
    { path: '/documents', label: 'Документы' },
    { path: '/photoalbum', label: 'Фотографии' },
    { path: '/ChernobylTests', label: 'Тесты' },
  ];

  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default PowerButton;
