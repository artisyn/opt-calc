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
const domfiTimeResult = document.querySelector('.domfiTimeResult');

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
const fEyesTimeResult = document.querySelector('.fEyesTimeResult');

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
const fuTimeResult = document.querySelector('.fuTimeResult');

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
const scTimeResult = document.querySelector('.scTimeResult');

// Time input

const hours1 = document.querySelector('.hh1');
const hours2 = document.querySelector('.hh2');
const minutes1 = document.querySelector('.min1');
const minutes2 = document.querySelector('.min2');

const timeRnd = document.querySelector('.time-rnd');

// Result

const resultBtn = document.querySelector('.btn-result');

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
// Adjust persentage

const adjustPercent = (num, percent) => {
	let randomPercent = randomMinMax(1, percent);
	let num2 = (100 - randomPercent) / 100;
	return num * num2;
};

// calculate cross border line ;
const calculateCbTime = () => {
	let caseCount = +cbCases.value;
	let targetKpi = +cbTargetTime.value;
	let totalTime = caseCount * targetKpi * 60;
	let finalCbTime = adjustPercent(totalTime, +cbSpread.value);
	return finalCbTime;
};

const calculateFinals = () => {
	const todaysTime = calculateTodaysTime();
	let finalTodaysTime = adjustPercent(todaysTime, +timeRnd.value);
	console.log(finalTodaysTime);
	console.log(calculateCbTime());
};

resultBtn.addEventListener('click', (e) => {
	calculateFinals();
});
