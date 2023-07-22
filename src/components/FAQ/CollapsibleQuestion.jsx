import React, { useState } from 'react';

const CollapsibleQuestion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className='faq'>
      <button className='question' onClick={toggleCollapse}>{question}</button>
      {/* {isOpen && <p className='answer'>{answer}</p>} */}
      {isOpen && <p className='answer' dangerouslySetInnerHTML={renderHTML(answer)}/>}
      {/* <p
            className="answer"
            dangerouslySetInnerHTML={renderHTML(answer)}
          /> */}
    </div>
  );
};

export default CollapsibleQuestion;