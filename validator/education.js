const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateExperience(data) {
  let errors = {};

  data.college = !isEmpty(data.college) ? data.college : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';

  if (Validator.isEmpty(data.college)) {
    errors.college = 'college field is required';
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }



  return {
    errors,
    isValid: isEmpty(errors)
  };
};
