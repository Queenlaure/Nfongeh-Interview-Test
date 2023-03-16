import React from 'react';
import '../searchForm.css';

interface FormTitleProps {text: string}

const FormTitle= ({text}: FormTitleProps) => {
  return (
    <div>
      <p className='heading'>{text}</p>
    </div>
  );
};

export default FormTitle;
