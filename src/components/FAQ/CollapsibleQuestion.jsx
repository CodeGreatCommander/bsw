import React, { useState } from 'react';

const CollapsibleQuestion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleCollapse}>{question}</button>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default CollapsibleQuestion;