function calculateTip (){
    const billAmount = parseFloat(document.getElementById("bill").value);
    const serviceQuality = parseFloat(document.getElementById("service").value);
    const numberOfPeople = parseFloat(document.getElementById("people").value);
    
    if(!billAmount || !serviceQuality || !numberOfPeople){
        alert('error');
        return;
    }

    if(isNaN(billAmount)|| billAmount<= 0){
      alert('please enter aaa number');
      return;
    }
    if(isNaN(serviceQuality)){
        alert('please select valip option');
        return;
    }
    if(isNaN(numberOfPeople) || numberOfPeople <=0){
        alert('please enter value above 1');
        return;
    }
    //caluculte values
    const tipAmount = billAmount * serviceQuality;
    const totalbill = billAmount + tipAmount;
    const perperson = totalbill / numberOfPeople;
    const tipPerPerson = tipAmount / numberOfPeople;

    //display results with 2 decimal

    document.getElementById("tipAmount").textContent=`₹`+ tipAmount.toFixed(2);
    document.getElementById("totalAmount").textContent=`₹`+totalbill.toFixed(2);
    document.getElementById("perPerson").textContent=`₹`+perperson.toFixed(2);
    document.getElementById("tipPerPerson").textContent=`₹`+tipPerPerson.toFixed(2);

}
 document.getElementById("calculateBtn").addEventListener('click',calculateTip);

 