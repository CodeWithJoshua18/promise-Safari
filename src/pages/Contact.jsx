import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const questions = [
    { id: 1, text: "What type of trip are you interested in?", options: ["Safari", "Beach Holiday", "Mountain Adventure", "Cultural Tour"] },
    { id: 2, text: "When do you plan to travel?", options: ["Within 3 months", "3–6 months", "6–12 months", "Not sure yet"] },
    { id: 3, text: "How many people will be traveling?", options: ["1", "2", "3–5", "6+"] },
  ];

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const totalSteps = questions.length;

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setStep(totalSteps + 1); // move to form
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-center">📞 Get in Touch</h2>

      {/* Progress Bar */}
      {step <= totalSteps && (
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <motion.div
            className="bg-black h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}

      {/* Questionnaire */}
      {step <= totalSteps && (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 p-6 rounded-lg shadow space-y-6 text-center"
        >
          <h3 className="text-xl font-semibold">{questions[step - 1].text}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[step - 1].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(questions[step - 1].id, opt)}
                className="px-4 py-3 bg-white border rounded-lg shadow hover:bg-black hover:text-white transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Contact Form appears after questionnaire */}
      {step > totalSteps && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <form className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

          {/* Summary of answers */}
          <div className="bg-black text-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">✨ Your Travel Preferences</h3>
            <ul className="space-y-2 text-gray-200">
              {Object.entries(answers).map(([qId, ans]) => (
                <li key={qId}>• {questions.find((q) => q.id.toString() === qId)?.text}: {ans}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Contact;
