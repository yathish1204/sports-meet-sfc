import React from "react";
import { rules } from "../constants";

const Rules = () => {
  return (
    <section className="w-[90%] mx-auto my-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl text-left md:text-center md:text-4xl font-bold text-primary mb-2 ">
          Rules & Regulations
        </h2>
        <p className="text-base text-left md:text-center md:text-lg text-secondary">
          ಸ್ಪರ್ಧೆಗಳಿಗಾಗಿ ಪಾಲಿಸಬೇಕಾದ ಮುಖ್ಯ ನಿಯಮಗಳು
        </p>
      </div>
      <div className="bg-[#E0E0E0] rounded-2xl  px-4 py-6">
        <ol className="space-y-6 list-decimal list-inside">
          {rules.map((rule, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="inline-block mt-1 text-primary text-2xl">•</span>
              <span className="text-base text-primary leading-relaxed">
                {rule}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Rules;
