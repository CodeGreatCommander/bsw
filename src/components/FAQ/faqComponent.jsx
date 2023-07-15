import React, { useState } from 'react';
import faqsData from '../../assets/faqs.json';
import CollapsibleQuestion from './CollapsibleQuestion';

const FaqComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const categories = (Object.keys(faqsData))
  return (
    <div>
      <h1>Frequently Asked Questions</h1>

      <div>
        {categories.map(category => (
  <button
    key={category}
    onClick={() => handleCategoryChange(category)}
  >
    {category}
  </button>
))}

      </div>

      {faqsData[selectedCategory].map((faq) => (
        <CollapsibleQuestion key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};


export default FaqComponent;