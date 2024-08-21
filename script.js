function loadProfile() {
    const userName = localStorage.getItem('userName');
    const profilePic = localStorage.getItem('profilePic');

    if (userName) {
        document.getElementById('userName').textContent = userName;
        document.getElementById('genderSelection').style.display = 'none';
        document.getElementById('nameInput').style.display = 'none';
    } else {
        document.getElementById('genderSelection').style.display = 'block';
        document.getElementById('nameInput').style.display = 'none';
    }

    if (profilePic) {
        document.getElementById('profilePic').src = profilePic;
    }
}
