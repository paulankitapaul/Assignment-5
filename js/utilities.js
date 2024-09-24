// change button color onClick
function showActive(id) {
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]')
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]')

    document.getElementById(id).classList.add('bg-[#B4F461]')
};