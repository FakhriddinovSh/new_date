const new_date = new Date();

const weekDays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

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

function formatDate() {
	// Bugungi sana
	const date = new_date.getDate();
	console.log(date);
	// Oyni olish
	const month = new_date.getMonth();
	const month_name = months[month]; // 0 - 11

	// Kun nomini oldik
	const day = new_date.getDay();
	const day_name = weekDays[day];

	const hour = new_date.getHours();
	const minute = new_date.getMinutes();
	const second = new_date.getSeconds();
	const millisecond = new_date.getMilliseconds();

	console.log(`${date} ${month_name}, ${day_name}
    ${hour}:${minute}:${second}:${millisecond}
    `);
}

formatDate();

// Get Date / Sana

// const hour = date.getHours();
// console.log(hour);
