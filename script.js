const submitBtn = document.getElementById('submit-btn');
const email = document.querySelector('.email');
const emailDiv = document.querySelector('.email-div') 

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    if(email.validity.typeMismatch == true || email.value == '') { 
        emailDiv.setAttribute('id', 'invalid')
    }else {
        emailDiv.removeAttribute('id')
    } 
})  