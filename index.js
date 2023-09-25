document.addEventListener('DOMContentLoaded', ()=> {
    /*to be feeded back in the DOM*/
    const cardNumber = document.querySelector('.card-number');
    const holderName = document.querySelector('.holder-name');
    const expDate = document.querySelector('.Exp-date');
    const cvc = document.querySelector('.cvc');

    /* information supplied by the user */
    const cardName = document.querySelector('#cardholder-name')
    const cardNum = document.querySelector('#card-number-detail');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const inputCvc = document.querySelector('#cvc');
    const button = document.querySelector('<button>')

    /** Success popUp**/
    const popUp = document.querySelector('success-modal')

    let active = false;

    function showErrorMessages(Message) {
        error.textContent = Message;
    }

    function clearErrorMessages() {
        error.textContent = '';
    }

    function nameValidation(str){
        let str = cardName.value;
        const pattern = /^[a-zA-Z][a-z]+(\s)[a-zA-Z][a-z]+$/;
        const valid = pattern.test(str);
        return valid;
    }

    function cardNumValidation(num){
        let num = cardNum.value;
        const pattern = /^[0-9]{16}$/;
        const valid = pattern.test(num);
        return valid;
    }

    console.log(cardNumValidation)

    function cardDateCvcValidation(){
        const data = month.value && year.value && inputCvc.value? : ;
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (!cardNumValidation && !nameValidation){
            card.classList.add('active');
            textSuccess.classList.remove('active');
            textSuccess.classList.add('text-success');
            changeBorderColor(true);
            changeTextColor(true);
            clearErrorMessages()
        }else{
            card.classList.remove('active');
            textSuccess.classList.remove('text-success');
            textSuccess.classList.add('active');
            showErrorMessages('Valid email required')
            changeBorderColor(false);
            changeTextColor(false);
        }
        
    })
})


























/*input.addEventListener('input', (e) => {
    e.preventDefault();
    let email = input.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    active = pattern.test(email);

    if(active){
        changeBorderColor(true);
        clearErrorMessages();
        changeTextColor(true);
    }//else{
       // changeBorderColor(false);
        //changeTextColor(false);
    //}
})

function changeBorderColor(valid) {
    if(!valid){
    input.classList.add('invalid');
    }else{
        input.classList.remove('invalid');
    }

}

const error = document.querySelector('.error');

function changeTextColor(valid) {
    error.style.color = valid ? 'initial' : 'red';
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    let email = input.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    active = pattern.test(email);

    
    if (active){
    output.textContent = email;
    card.classList.add('active');
    textSuccess.classList.remove('active');
    textSuccess.classList.add('text-success');
    changeBorderColor(true);
    changeTextColor(true);
    clearErrorMessages()
    }else{
        card.classList.remove('active');
        textSuccess.classList.remove('text-success');
        textSuccess.classList.add('active');
        showErrorMessages('Valid email required')
        changeBorderColor(false);
        changeTextColor(false);
    }

})

dismiss.addEventListener('click', () => {
    if (active){
        
        card.classList.remove('active');
        textSuccess.classList.remove('text-success');
        textSuccess.classList.add('active');
    }
        //card.classList.add('active');
       // textSuccess.classList.remove('active');
       // textSuccess.classList.add('text-success');
})*/