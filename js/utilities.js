// change button color onClick
function showActive(id) {

    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]')

    document.getElementById('btn-history').classList.remove('bg-[#B4F461]')


    document.getElementById(id).classList.add('bg-[#B4F461]')
};

// hiding one of the parts
function showSection(id) {

    document.getElementById('donation-section').classList.add('hidden');

    document.getElementById('history-section').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');
};


// getting input value
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const donateValue = parseFloat(inputValue);
    return donateValue;
}

// getting current amount
function getInnerText(id) {
    const balance = document.getElementById(id).innerText;
    const haveBalance = parseFloat(balance);
    return haveBalance;
}