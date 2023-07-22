import React, { useState } from "react";
import faqsData from "../../assets/faqs.json";
import CollapsibleQuestion from "./CollapsibleQuestion";
import "./FaqComponent.css";

const FaqComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const categories = Object.keys(faqsData);
  return (
    <div className="container">
      <div className="category-container">
        {categories.map((category) => (
          <button
            className={selectedCategory===category? "selected": "category"}
            key={category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {faqsData[selectedCategory].map((faq) => (
        <CollapsibleQuestion
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FaqComponent;
