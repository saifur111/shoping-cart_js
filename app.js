const mobilePlus='mobile-plus';
const mobileMinus='mobile-minus';
const casePlus='case-plus';
const caseMinus='case-minus';
const mobileNumber ='mobile-number';
const caseNumber ='case-number';
const caseTotal ='case-total';
const mobileTotal ='mobile-total';
const subTotal ='sub-total';
const texTotal ='tex-amount';
const totalPrice ='total-price';

function getInputId(inputId){
    return document.getElementById(inputId);
}
function getInputValue(id){
    return parseInt( getInputId(id).value);
}
function calculateTotal(){
    const phoneTotalCalculate = getInputValue(mobileNumber) * 1219;
    const caseTotalCalculate = getInputValue(caseNumber) * 59;
    console.log(phoneTotalCalculate);
    const sub_totalCalculate =phoneTotalCalculate + caseTotalCalculate;
    const taxCalculate =sub_totalCalculate/10;
    const totalCalculate = sub_totalCalculate + taxCalculate;
    // update on html
    getInputId(subTotal).innerText =sub_totalCalculate;
    getInputId(texTotal).innerText =taxCalculate;
    getInputId(totalPrice).innerText =totalCalculate;

}
function casePlusMinusHandeler(id ,isTrue,number,price,amount){
    document.getElementById(id).addEventListener('click',function () {
        const cartAmount = getInputId(amount);
        const valueAmount = price;
        const valueInput = getInputId(number);
        const valueNumber = valueInput.value;
        if(isTrue== true){
            valueInput.value = parseInt(valueNumber)+1;
           
        }
            
        else if(valueInput.value>0)
            valueInput.value = parseInt(valueNumber)-1;
            //Update total 
        cartAmount.innerText =valueInput.value * valueAmount;
            //calculate total
        calculateTotal();
    })   
}

casePlusMinusHandeler(mobilePlus,true,mobileNumber,1219,mobileTotal);
casePlusMinusHandeler(mobileMinus,false,mobileNumber,1219,mobileTotal);
casePlusMinusHandeler(casePlus,true,caseNumber,59,caseTotal);
casePlusMinusHandeler(caseMinus,false,caseNumber,59,caseTotal);
