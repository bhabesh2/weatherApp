

let timeEl = document.getElementsByClassName("time")[0];
let dateEl = document.getElementsByClassName("date")[0];

setInterval(() => {
    let currentDate = new Date();
    let hours = currentDate.getHours() % 12 || 12;
    let amOrPm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
    if (hours >= 12 && amOrPm === 'PM') {
        hours -= 12;
    }
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let seconds = currentDate.getSeconds().toString().padStart(2, '0');
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedDay = currentDate.toLocaleDateString('en-US', {weekday: 'long'}).substring(0, 3).toLowerCase();
    let formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    timeEl.innerHTML = `${formattedHours}:${minutes}:${seconds} ${amOrPm}`;
    dateEl.innerHTML = `${formattedDay} | ${formattedDate} `;
}, 1000);
