document.getElementById('btn-donation').addEventListener('click', function () {
    showSection('donation-section');
    showActive('btn-donation');
});

document.getElementById('btn-history').addEventListener('click', function () {
    showSection('history-section');
    showActive('btn-history');
});


// Calculate Noakhali Donation
document.getElementById('btn-donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = getInputValue('input-donation-noakhali');
    const currentBalance = getInnerText('current-balance');
    const currentDonation = getInnerText('noa-balance');

    
    if (isNaN(inputValue)) {
        alert('Failed');
        return;
    }

    if (inputValue > currentBalance || inputValue < 0) {
        alert('Failed');
        return;
    }

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-balance').innerText = newCurrentBalance;
    document.getElementById('noa-balance').innerText = newCurrentDonation;


     // add transaction history
     const title = document.getElementById('heading-noakhali').innerText;
     const div = document.createElement('div');
     div.classList.add('shadow-xl', 'p-8', 'rounded-2xl', 'border', 'my-6');
     div.innerHTML = `
         <p class="font-bold"> ${inputValue} Taka is ${title} </p>
     `
 
     document.getElementById('history-container').appendChild(div);

});


// Calculate Feni Donation
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = getInputValue('input-donation-feni');
    const currentBalance = getInnerText('current-balance');
    const currentDonation = getInnerText('feni-balance');

        
    if (isNaN(inputValue)) {
        alert('Failed');
        return;
    }

    if (inputValue > currentBalance || inputValue < 0) {
        alert('Failed');
        return;
    }

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-balance').innerText = newCurrentBalance;
    document.getElementById('feni-balance').innerText = newCurrentDonation;

     // add transaction history
     const title = document.getElementById('heading-feni').innerText;
     const div = document.createElement('div');
     div.classList.add('shadow-xl', 'p-8', 'rounded-2xl', 'border', 'my-6');
     div.innerHTML = `
          <p class="font-bold"> ${inputValue} Taka is ${title} </p>
      `
 
     document.getElementById('history-container').appendChild(div);
});

// Calculate Quota Donation
document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = getInputValue('input-donation-quota');
    const currentBalance = getInnerText('current-balance');
    const currentDonation = getInnerText('quota-balance');

    if (isNaN(inputValue)) {
        alert('Failed');
        return;
    }

    if (inputValue > currentBalance || inputValue < 0) {
        alert('Failed');
        return;
    }

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-balance').innerText = newCurrentBalance;
    document.getElementById('quota-balance').innerText = newCurrentDonation;


        // add transaction history
        const title = document.getElementById('heading-quota').innerText;
        const div = document.createElement('div');
        div.classList.add('shadow-xl', 'p-8', 'rounded-2xl', 'border', 'my-6');
        div.innerHTML = `
             <p class="font-bold"> ${inputValue} Taka is Donated For ${title} </p>
         `
    
        document.getElementById('history-container').appendChild(div);
});
