const form = document.querySelector('form');
const bmrResult = document.querySelector('#bmr-result');
const tdeeResult = document.querySelector('#tdee-result');
const intakeResult = document.querySelector('#intake-result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);
    const age = parseInt(form.age.value);
    const gender = form.gender.value;
    const activity = parseFloat(form.activity.value);
    const goal = parseFloat(form.goal.value);

    let bmr;

    if (gender === 'girl') {
        bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    } else {
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    }

    const tdee = bmr * activity;
    const intake = tdee - (goal * 7700) / 365;

    result.innerHTML = `你的基礎代謝率(BMR)為 ${bmr.toFixed(0)} 大卡。<br>`;
    result.innerHTML += ` 你的每日總消耗熱量(TDEE)為 ${tdee.toFixed(0)} 大卡。<br>`;
    result.innerHTML += ` 你每日應攝取 ${intake.toFixed(0)} 大卡以達成目標。`;
});

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
