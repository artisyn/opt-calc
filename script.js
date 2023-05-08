// Cross Border
// cases
const cbCases = document.querySelector('.cb');
const addCb = document.querySelector('.cbPlus');
const removeCb = document.querySelector('.cbMinus');
// target time
const cbTargetTime = document.querySelector('.cbTargetTime');
// spread
const cbSpread = document.querySelector('.cbSpread');
// result
const cbTimeResult = document.querySelector('.cbTimeResult');

// Domestic
// cases
const domfiCases = document.querySelector('.domfi');
const addDomfi = document.querySelector('.domfiPlus');
const removeDomfi = document.querySelector('.domfiMinus');
// target time
const domfiTargetTime = document.querySelector('.domfiTargetTime');
// spread
const domfiSpread = document.querySelector('.domfiSpread');
// result
const domfiTimeResult = document.querySelector('.domfiResult');

// 4eyes
// cases
const fEyesCases = document.querySelector('.fEyes');
const addFeyes = document.querySelector('.fEyesPlus');
const removeFeyes = document.querySelector('.fEyesMinus');
// target time
const fEyesTargetTime = document.querySelector('.fEyesTargetTime');
// spread
const fEyesSpread = document.querySelector('.fEyesSpread');
// result
const fEyesTimeResult = document.querySelector('.fEyesResult');

// Follow up
// cases
const fuCases = document.querySelector('.fu');
const addFu = document.querySelector('.fuPlus');
const removeFu = document.querySelector('.fuMinus');
// target time
const fuTargetTime = document.querySelector('.fuTargetTime');
// spread
const fuSpread = document.querySelector('.fuSpread');
// result
const fuTimeResult = document.querySelector('.fuResult');

// Cheques
// cases
const scCases = document.querySelector('.sc');
const addSc = document.querySelector('.scPlus');
const removeSc = document.querySelector('.scMinus');
// target time
const scTargetTime = document.querySelector('.scTargetTime');
// spread
const scSpread = document.querySelector('.scSpread');
// result
const scTimeResult = document.querySelector('.scResult');

// Time input

const hours1 = document.querySelector('.hh1');
const hours2 = document.querySelector('.hh2');
const minutes1 = document.querySelector('.min1');
const minutes2 = document.querySelector('.min2');

const timeRnd = document.querySelector('.time-rnd');

// Result

const resultBtn = document.querySelector('.btn-result');
const resultPalletCb = document.querySelector('.result__pallete-cb');
const resultPalletDomfi = document.querySelector('.result__pallete-domfi');
const resultPalletFeyes = document.querySelector('.result__pallete-fEyes');
const resultPalletFu = document.querySelector('.result__pallete-fu');
const resultPalletSc = document.querySelector('.result__pallete-sc');

const timeLeft = document.querySelector('.time-left');

// add or remove functions

const incrementByOne = (target) => {
	if (+target.value > 349) return;
	target.value = +target.value + 1;
};

const decrementByOne = (target) => {
	if (+target.value < 1) return;
	target.value = +target.value - 1;
};

const checkLimits = (target, max, min) => {
	if (+target.value >= max) {
		target.value = max;
	}

	if (+target.value <= min) {
		target.value = min;
	}
	// removing 0
	if (+target.value.length > 1 && +target.value[0] === 0) {
		target.value = +target.value[1];
	}
};

// CB
addCb.addEventListener('click', (e) => incrementByOne(cbCases));
cbCases.addEventListener('input', (e) => checkLimits(e.target, 350, 0));
removeCb.addEventListener('click', (e) => decrementByOne(cbCases));

// DOMFI
addDomfi.addEventListener('click', (e) => incrementByOne(domfiCases));
domfiCases.addEventListener('input', (e) => checkLimits(e.target, 350, 0));
removeDomfi.addEventListener('click', (e) => decrementByOne(domfiCases));

// 4EYES
addFeyes.addEventListener('click', (e) => incrementByOne(fEyesCases));
fEyesCases.addEventListener('input', (e) => checkLimits(e.target, 350, 0));
removeFeyes.addEventListener('click', (e) => decrementByOne(fEyesCases));

// FOLLOW UPS
addFu.addEventListener('click', (e) => incrementByOne(fuCases));
fuCases.addEventListener('input', (e) => checkLimits(e.target, 350, 0));
removeFu.addEventListener('click', (e) => decrementByOne(fuCases));

// CHEQUES
addSc.addEventListener('click', (e) => incrementByOne(scCases));
scCases.addEventListener('input', (e) => checkLimits(e.target, 350, 0));
removeSc.addEventListener('click', (e) => decrementByOne(scCases));

// MAIN LOGIC

// todays time

const calculateTodaysTime = () => {
	let num1 = +hours2.value * 3600;
	let num2 = +minutes1.value * 10 * 60;
	let num3 = +minutes2.value * 60;
	let time = num1 + num2 + num3;
	return time;
};
// Random math

const randomMinMax = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

// Seconds to hours and minutes
const secondsToHoursAndMinutes = (seconds) => {
	let hours = Math.floor(seconds / 3600); // 1 hour = 3600 seconds
	let minutes = Math.floor((seconds % 3600) / 60); // 1 minute = 60 seconds
	hours = hours.toString().padStart(2, '0');
	minutes = minutes.toString().padStart(2, '0');
	return `${hours} : ${minutes}`;
};
// Adjust persentage

const adjustPercent = (num, percent) => {
	let randomPercent = randomMinMax(1, percent);
	let num2 = (100 - randomPercent) / 100;
	return num * num2;
};

// convert time to percentage

const timeToPercentage = (maxVal, actual) => {
	return (+actual * 100) / +maxVal;
};

// allow only 0-9 to input
const onlySingleDigit = (input, inputValue) => {
	let last = input.value[0];
	const regex = /^[0-9]$/;
	if (regex.test(+inputValue)) {
		input.value = inputValue;
		return;
	}
	if (inputValue === '-') {
		input.value = 0;
		return;
	}

	input.value = last;
	return;
};

// allow only 0 - 6
const onlySingleDigitTill6 = (input, inputValue) => {
	let last = input.value[0];
	console.log(last);
	const regex = /^[0-6]$/;
	if (regex.test(+inputValue)) {
		input.value = inputValue;
		return;
	}
	if (inputValue === '-') {
		input.value = 0;
		return;
	}
	input.value = last;
	return;
};

hours2.addEventListener('input', (e) => {
	onlySingleDigit(e.target, e.data);
});

[minutes1, minutes2].forEach((el) =>
	el.addEventListener('input', (e) => {
		onlySingleDigitTill6(e.target, e.data);
	})
);

// calculate cross border line ;
const calculateCbTime = () => {
	let caseCount = +cbCases.value;
	let targetKpi = +cbTargetTime.value;
	let totalTime = caseCount * targetKpi * 60;
	let finalCbTime = adjustPercent(totalTime, +cbSpread.value);
	return finalCbTime;
};
// calculate domfi line
const calculateDomfiTime = () => {
	let caseCount = +domfiCases.value;
	let targetKpi = +domfiTargetTime.value;
	let totalTime = caseCount * targetKpi * 60;
	let finalDomfiTime = adjustPercent(totalTime, +domfiSpread.value);
	return finalDomfiTime;
};
// calculate Feyes line
const calculateFeyesTime = () => {
	let caseCount = +fEyesCases.value;
	let targetKpi = +fEyesTargetTime.value;
	let totalTime = caseCount * targetKpi * 60;
	let finalFeyesTime = adjustPercent(totalTime, +fEyesSpread.value);
	return finalFeyesTime;
};
// calculate SC line
const calculateSCTime = () => {
	let caseCount = +scCases.value;
	let targetKpi = +scTargetTime.value;
	let totalTime = caseCount * targetKpi * 60;
	let finalScTime = adjustPercent(totalTime, +scSpread.value);
	return finalScTime;
};
// calculate FU line
const calculateFuTime = () => {
	let caseCount = +fuCases.value;
	let targetKpi = +fuTargetTime.value;
	let totalTime = caseCount * targetKpi * 60;
	let finalFuTime = adjustPercent(totalTime, +fuSpread.value);
	return finalFuTime;
};

const calculateFinals = () => {
	const todaysTime = calculateTodaysTime();
	// get total todays time
	let finalTodaysTime = adjustPercent(todaysTime, +timeRnd.value);
	// calculate total time for each line and show it, also set the width of corresponding pallete;
	let cbTime = calculateCbTime();
	cbTimeResult.value = secondsToHoursAndMinutes(cbTime);
	resultPalletCb.style.width =
		timeToPercentage(finalTodaysTime, cbTime) + '%';

	let domfiTime = calculateDomfiTime();
	domfiTimeResult.value = secondsToHoursAndMinutes(domfiTime);
	resultPalletDomfi.style.width =
		timeToPercentage(finalTodaysTime, domfiTime) + '%';

	let fEyesTime = calculateFeyesTime();
	fEyesTimeResult.value = secondsToHoursAndMinutes(fEyesTime);
	resultPalletFeyes.style.width =
		timeToPercentage(finalTodaysTime, fEyesTime) + '%';

	let fuTime = calculateFuTime();
	fuTimeResult.value = secondsToHoursAndMinutes(fuTime);
	resultPalletFu.style.width =
		timeToPercentage(finalTodaysTime, fuTime) + '%';

	let scTime = calculateSCTime();
	scTimeResult.value = secondsToHoursAndMinutes(scTime);
	resultPalletSc.style.width =
		timeToPercentage(finalTodaysTime, scTime) + '%';

	// calculate total today's time minus all the lines;
	let monitoringTime =
		finalTodaysTime - cbTime - domfiTime - fEyesTime - fuTime - scTime;
	timeLeft.innerHTML = secondsToHoursAndMinutes(monitoringTime);
};

resultBtn.addEventListener('click', (e) => {
	calculateFinals();
});
