const casesMinutes = ['минута', 'минуты', 'минут'];
const casesHours = ['час', 'часа', 'часов'];

export const normalizeDurationTime = duration => {
	let hours = Math.floor(duration / 60);
	let minutes = duration % 60;

	if (hours == 1) {
		hours = `${hours} час`;
	} else if (hours > 1 && hours < 5) {
		hours = `${hours} часа`;
	} else if (hours >= 5) {
		hours = `${hours} часов`;
	}

	if (minutes == 1) {
		minutes = `${minutes} минута`;
	} else if (minutes > 1 && minutes < 5) {
		minutes = `${minutes} минуты`;
	} else if (minutes >= 5) {
		minutes = `${minutes} минут`;
	}
	return { hours, minutes };
};
