const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();

    const email = form.elements.email;
    const password = form.elements.password;
  
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    if (emailValue === '' || passwordValue === '') {
      return('All form fields must be filled in'); 
    }
    
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    
    console.log(formData);
    

    form.reset();
  };

