export const Validation = formData => {
    var errors = {}

    if (!formData.firstName) {
        errors.firstName = 'firstName is Required.';
      }
      if (!formData.lastName) {
        errors.lastName = 'lastName is Required.';
      }
      if (!formData.email) {
        errors.email = 'Email is Required.';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,}$/i.test(formData.email)) {
        errors.email = 'Email address is invalid.';
      }
      if (!formData.password) {
        errors.password = 'Password is required';
      } else if (formData.password.length < 6 ) {
        errors.password = 'Password needs to be 6 characters or more';
      }
    
      if (!formData.confirmPassword) {
        errors.confirmPassword = 'Password is required';
      } else if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = 'Passwords do not match';
      }
      return errors;
}