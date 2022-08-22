const frontPage = document.getElementById("front-page")
const btnSubmit = document.getElementById("submit-btn");
const secondPage = document.getElementById("second-page");

btnSubmit.addEventListener("click", function(){
    frontPage.style.display = "none";
    secondPage.style.display = "block";
});


// deposit button handler

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function(){

    const depositMainAmount = mainAmount("deposit-num")

    calculateAmount("current-deposit", depositMainAmount);
    calculateAmount("my-balance", depositMainAmount) ;

    document.getElementById("deposit-num").value = "";

    //    const depositAmount = document.getElementById("deposit-num").value;
    //    const depositAmountNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById("current-deposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = currentDepositNumber + depositAmountNumber ;
    // document.getElementById("current-deposit").innerText = totalDeposit ;

    // const myBalance = document.getElementById("my-balance").innerText;
    // const myBalanceNumber = parseFloat(myBalance);
    // const updateBalance = myBalanceNumber + depositAmountNumber ;
    // document.getElementById("my-balance").innerText = updateBalance;
   
});

// withdraw button handler

const withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", function(){    
    const withdrawMainAmount= mainAmount("withdraw-amount");

    calculateAmount("current-withdraw", withdrawMainAmount);
    calculateAmount("my-balance", (-1 * withdrawMainAmount));

    document.getElementById("withdraw-amount").value = "";

    // const withdrawAmount = document.getElementById("withdraw-amount").value ;
    // const withdrawAmountNumber = parseFloat(withdrawAmount);

    // const currentWithdraw = document.getElementById("current-withdraw").innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;
    // document.getElementById("current-withdraw").innerText = totalWithdraw;
});
function calculateAmount(id, MainAmount){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + MainAmount ;
    document.getElementById(id).innerText = total ;
}
function mainAmount (id){
    const withdrawAmount = document.getElementById(id).value ;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    return withdrawAmountNumber;
}