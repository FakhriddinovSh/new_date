// .padStart()
// .padEnd()

// let month = '522';
// let new_month = month.padStart(2, '0');
// let new_month = month.padEnd(2, '0');

// console.log(new_month);

// const time = date.getHours();
// console.log(time);

// const millisecond = date.getSeconds();
// console.log(millisecond);

const elTime = document.querySelector('.time');

const new_date = new Date();

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

function renderTime() {
	const date = new_date.getDate();

	const month = new_date.getMonth();
	const month_name = months[month];

	const year = new_date.getFullYear();

	const hour = new_date.getHours();
	const minute = new_date.getMinutes();
	const seconds = new_date.getSeconds();

	const result = `${date} ${month_name}, ${year}
    ${hour}:${minute}:${seconds}`;

	elTime.textContent = result;
}

renderTime();
