// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './QuizPage.scss';  

// const QuizPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   useEffect(() => {
//     // Fetch questions from the API
//     axios.get('http://localhost:8080/api/questions')
//       .then(response => {
//         setQuestions(response.data.questions);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the questions!", error);
//         setLoading(false);
//       });
//   }, []);

//   const capitalizeFirstLetter = (str) => {
//     return str.replace(/\b\w/g, char => char.toUpperCase());
//   };

//   // Handle the button click
//   const handleSubmit = () => {
//     if (Object.keys(selectedOptions).length !== questions.length) {
//       alert("Please answer all questions.");
//       return;
//     }

//     axios.post('http://localhost:8080/api/suggestions', selectedOptions)
//       .then(response => {
//         console.log("Submitted successfully:", response.data);
//       })
//       .catch(error => {
//         console.error("Error submitting quiz:", error);
//       });
//   };

//   const handleChange = (event, questionId) => {
//     setSelectedOptions(prevState => ({
//       ...prevState,
//       [questionId]: event.target.value
//     }));
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="questions-container">
//       {questions.map((question) => (
//         <div key={question.id} className="question">
//           <h3>{question.question}</h3>
//           <select
//             className="dropdown"
//             value={selectedOptions[question.id] || ''}
//             onChange={(e) => handleChange(e, question.id)}
//           >
//             {question.options.map((option, index) => (
//               <option key={index} value={option}>
//                 {capitalizeFirstLetter(option)}
//               </option>
//             ))}
//           </select>
//         </div>
//       ))}
//       <button className="submit-button" onClick={handleSubmit}>
//         Submit Quiz
//       </button>
//     </div>
//   );
// };

// export default QuizPage;
import { useEffect, useState } from 'react';
import axios from 'axios';
import './QuizPage.scss';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    // Fetch questions from the API
    axios.get('http://localhost:8080/api/questions')
      .then(response => {
        setQuestions(response.data.questions);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the questions!", error);
        setLoading(false);
      });
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  // Handle the button click to submit the quiz
  const handleSubmit = () => {
    if (Object.keys(selectedOptions).length !== questions.length) {
      alert("Please answer all questions.");
      return;
    }

    const payload = {
      jobTitle: selectedOptions[1], // Question 1 - Job Title
      goal: selectedOptions[2]      // Question 2 - Goal
    };

    axios
      .post("http://localhost:8080/api/suggestions", payload)
      .then((response) => {
        console.log("Recommendation:", response.data.recommendation);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

  const handleChange = (event, questionId) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [questionId]: event.target.value
    }));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="questions-container">
      {questions.map((question) => (
        <div key={question.id} className="question">
          <h3>{question.question}</h3>
          <select
            className="dropdown"
            value={selectedOptions[question.id] || ''}
            onChange={(e) => handleChange(e, question.id)}
          >
            {question.options.map((option, index) => (
              <option key={index} value={option}>
                {capitalizeFirstLetter(option)}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizPage;
