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

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-balance').innerText = newCurrentBalance;
    document.getElementById('noa-balance').innerText = newCurrentDonation;

});


// Calculate Feni Donation
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = getInputValue('input-donation-feni');
    const currentBalance = getInnerText('current-balance');
    const currentDonation = getInnerText('feni-balance');

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-balance').innerText = newCurrentBalance;
    document.getElementById('feni-balance').innerText = newCurrentDonation;
});

// Calculate Quota Donation
document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = getInputValue('input-donation-quota');
    const currentBalance = getInnerText('current-balance');
    const currentDonation = getInnerText('quota-balance');

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-balance').innerText = newCurrentBalance;
    document.getElementById('quota-balance').innerText = newCurrentDonation;
});
