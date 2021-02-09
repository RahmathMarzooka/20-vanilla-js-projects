const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count')
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')
populateUI();


let ticketPrice = +movieSelect.value;



function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('SelectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));


    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const selectedSeatsLength = selectedSeats.length;
    count.innerText = selectedSeatsLength;
    total.innerText = selectedSeatsLength * ticketPrice;
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach(function (seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        });
    }
    const SelectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (SelectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}



container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedCount();
    }
})

movieSelect.addEventListener('change', function (e) {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();

})
updateSelectedCount();