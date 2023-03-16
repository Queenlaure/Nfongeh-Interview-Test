import React from 'react';
import '../searchForm.css';

interface DateTitleProps {text: string}

const DateTitle= ({text}: DateTitleProps) => {
  return (
    <div>
      <p className='dateTitle'>{text}</p>
    </div>
  );
};

export default DateTitle;
