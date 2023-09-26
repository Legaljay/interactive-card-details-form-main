document.addEventListener('DOMContentLoaded', () => {
    const cardNumber = document.querySelector('.card-number');
    const holderName = document.querySelector('.holder-name');
    const expDate = document.querySelector('.Exp-date');
    const cvc = document.querySelector('.cvc');

    const cardName = document.querySelector('#cardholder-name');
    const cardNum = document.querySelector('#card-number-detail');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const inputCvc = document.querySelector('#cvc');
    const button = document.querySelector('#btn');
    const error = document.querySelector('#error'); 
    const main = document.querySelector('.main');

    const popUp = document.querySelector('#popUp');
    let active = false;

    inputCvc.addEventListener('input', () => {
        cvc.textContent = inputCvc.value || "000";
    });

    let expiryDate = '00/00';

    year.addEventListener('input', () => {
        expiryDate = `${month.value || "00"}/${year.value || "00"}`;
        expDate.textContent = expiryDate;
    });

    month.addEventListener('input', () => {
        expiryDate = `${month.value || "00"}/${year.value || "00"}`;
        expDate.textContent = expiryDate;
    });

    cardNum.addEventListener('input', () => {
        formattedCardNum = cardNum.value.match(/.{1,4}/g)?.join(" ");
        cardNumber.textContent = formattedCardNum || "0000 0000 0000 0000";
    });

    cardName.addEventListener('input', () => {
        holderName.textContent = cardName.value.toUpperCase() || "JANE APPLESEED";
    });

    function changeBorderColor(valid) {
        const inputs = document.querySelectorAll('input')
        inputs.forEach((input) => {
            if (!valid) {
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });
       
    }

    // function showErrorMessages(Message) {
    //     error.textContent = Message;
    // }

    function clearErrorMessages() {
        error.textContent = '';
    }

    function nameValidation() {
        const str = cardName.value;
        const pattern = /^[a-zA-Z][a-zA-Z\s]*$/;
        const valid = pattern.test(str);
        return valid;
    }

    function cardNumValidation() {
        const num = cardNum.value;
        const pattern = /^[0-9]{16}$/;
        const valid = pattern.test(num);
        return valid;
    }

    function cardDateCvcValidation() {
        return month.value !== '00' && year.value !== '00' && inputCvc.value !== '';
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (cardNumValidation() && nameValidation() && cardDateCvcValidation()) {
            popUp.classList.remove('hide');
            popUp.classList.add('success-modal');
            main.classList.add('hide')
            changeBorderColor(true);
            clearErrorMessages();
        } else {
            popUp.classList.remove('success-modal');
            popUp.classList.add('hide');
            main.classList.remove('hide')
            // showErrorMessages('Valid information required');
            changeBorderColor(false);
        }
    });
});




/*document.addEventListener('DOMContentLoaded', ()=> {
    ///////////////////////////////*to be feeded back in the DOM*////////////////////////////////////////
    /*const cardNumber = document.querySelector('.card-number');
    const holderName = document.querySelector('.holder-name');
    const expDate = document.querySelector('.Exp-date');
    const cvc = document.querySelector('.cvc');*/

    ////////////////////* information supplied by the user */////////////////////////////////////////////
    /*const cardName = document.querySelector('#cardholder-name')
    const cardNum = document.querySelector('#card-number-detail');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const inputCvc = document.querySelector('#cvc');
    const button = document.querySelector('#btn')
    const input = document.querySelectorAll('input')

    console.log(input)*/

    /** Success popUp**/
   /* const popUp = document.querySelector('#popUp')

    let active = false;

    console.log(cvc)
    
//////////////////////////*** INPUT EVENT LISTENERS FEEDING THE CARDS***/////////////////////////////////
    /*inputCvc.addEventListener('input', () => {
        cvc.textContent = inputCvc.value || "000";
        console.log(cvc)
    })

    // let expiryDate = `${month.value}/${year.value}`
    let expiryDate = '00/00';

    year.addEventListener('input', () => {
        expiryDate = `${month.value || "00"}/${year.value || "00"}`
        expDate.textContent = expiryDate;
    })

    month.addEventListener('input', () => {
        expiryDate = `${month.value || "00"}/${year.value || "00"}`
        expDate.textContent = expiryDate;
    })

    cardNum.addEventListener('input', () => {
        cardNumber.textContent = cardNum.value || "0000 0000 0000 0000";
        console.log(cvc)
    })

    cardName.addEventListener('input', () => {
        holderName.textContent = cardName.value || "JANE APPLESEED";
        console.log(cvc)
    })
////////////////////////////////////////END OF SECTION//////////////////////////////////////

    function changeTextColor(valid) {
        error.style.color = valid ? 'initial' : 'red';
    }

    function changeBorderColor(valid) {

        if(!valid){
        input.classList.add('invalid');
        }else{
            input.classList.remove('invalid');
        }
    
    }
    
    function showErrorMessages(Message) {
        error.textContent = Message;
    }

    function clearErrorMessages() {
        error.textContent = '';
    }

///////////////////////////////**INPUT VALIDATIONS**////////////////////////////////
   /* function nameValidation(){
        let str = cardName.value;
        const pattern = /^[a-zA-Z][a-z]+(\s)[a-zA-Z][a-z]+$/;
        const valid = pattern.test(str);
        return valid;
    }

    function cardNumValidation(){
        let num = cardNum.value;
        const pattern = /^[0-9]{16}$/;
        const valid = pattern.test(num);
        return valid;
    }
    console.log(cardDateCvcValidation, cardNumValidation, nameValidation)

    function cardDateCvcValidation(){
        const data = month.value && year.value && inputCvc.value
        return data
    }


    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (cardNumValidation && nameValidation && cardDateCvcValidation){
            
            popUp.classList.remove('hide');
            popUp.classList.add('success-modal');
            changeBorderColor(true);
            changeTextColor(true);
            clearErrorMessages()
        }else{
        
            popUp.classList.remove('success-modal');
            popUp.classList.add('hide');
            showErrorMessages('Valid email required')
            changeBorderColor(false);
            changeTextColor(false);
        }
        
    })
})*/


























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