let coins = parseInt(localStorage.getItem('coins')) || 0;
let currentLevel = parseInt(localStorage.getItem('currentLevel')) || 1;
const coinsToLevelUp = 1000000;
const maxLevel = 10;

function addCoins() {
    coins += 1; // افزایش به جای 10، حالا 1 عدد
    localStorage.setItem('coins', coins); // ذخیره تعداد سکه‌ها
    document.getElementById('score').innerHTML = `<img src="coin.png" alt="Coin" class="coin-icon"> ${coins.toLocaleString()}`;
    const progressPercent = (coins % coinsToLevelUp) / coinsToLevelUp * 100;
    document.getElementById('progress').style.width = progressPercent + '%';
    if (coins >= coinsToLevelUp * currentLevel && currentLevel < maxLevel) {
        currentLevel++;
        localStorage.setItem('currentLevel', currentLevel); // ذخیره سطح کاربر
        document.getElementById('currentLevel').textContent = currentLevel;
    }
    document.getElementById('clickSound').play();
}

function setGender(gender) {
    localStorage.setItem('userGender', gender);
    document.getElementById('genderSelection').style.display = 'none';
    document.getElementById('nameInput').style.display = 'block';
}

function setName() {
    const name = document.getElementById('nameField').value;
    if (name) {
        localStorage.setItem('userName', name);
        loadProfile();
    }
}

function loadProfile() {
    const userName = localStorage.getItem('userName');
    const profilePic = localStorage.getItem('profilePic');
    const userGender = localStorage.getItem('userGender');
    if (userName) {
        document.getElementById('userName').textContent = userName;
    }
    if (profilePic) {
        document.getElementById('profilePic').src = profilePic;
    }
    document.getElementById('genderSelection').style.display = 'none';
    document.getElementById('nameInput').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', loadProfile);
