const quizData = {
  questions: [
    {
      id: 'q1',
      text: 'Which of the following best describes...',
      options: [
        { value: 'A', text: 'Testing and QA are the same...' },
        // ...
      ],
      correctAnswers: ['B'],
      explanation: 'Testing is a product-oriented...'
    }
  ]
};

function validateQuestion(questionElement) {
  const checkboxes = questionElement.querySelectorAll('input[type="checkbox"]:checked');
  if (checkboxes.length === 0) {
    showError('Please select at least one answer before viewing the solution.');
    return false;
  }
  return true;
}