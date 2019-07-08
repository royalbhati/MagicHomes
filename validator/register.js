const validator = require('validator')
const isEmpty = require('./isEmpty')
module.exports = function validateRegisterInput(data){
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';




    if(validator.isEmpty(data.email)){
        errors.email="Email cannot be empty"
    }
    if(validator.isEmpty(data.password)){
        errors.password="password cannot be empty"
    }
    if(validator.isEmpty(data.password2)){
        errors.password2="confirm password cannot be empty"
    }

    if(!validator.isEmail(data.email)){
       errors.email = 'Email not valid'
    }
    if(!validator.isLength(data.password,{min:6,max:100})){
        errors.password = 'Password must be greater than 6'
     }

     if(!validator.equals(data.password,data.password2)){
         errors.passwords="Passwords must match"
     }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}