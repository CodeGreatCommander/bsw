import React, { useState } from 'react';

const CollapsibleQuestion = ({ question, answer }) => {
 
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className='faq'>
      <button className='question'>{question}</button>
      {/* {isOpen && <p className='answer'>{answer}</p>} */}
      {<p className='answer' dangerouslySetInnerHTML={renderHTML(answer)}/>}
      {/* <p
            className="answer"
            dangerouslySetInnerHTML={renderHTML(answer)}
          /> */}
    </div>
  );
};

export default CollapsibleQuestion;