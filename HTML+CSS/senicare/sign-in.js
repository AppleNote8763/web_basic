var userIdElement = document.getElementById('user-id');
var userPwElement = document.getElementById('user-password');
var messageElement = document.getElementById('message');
var signInButton = document.getElementById('sign-in-button');

function onSignInButtonClickHandler (event) {
    var userId = userIdElement.value;
    var userPassword = userPwElement.value;
    
    if (userId !== 'qwer1234' || userPassword !== '1234') {
        messageElement.textContent= '로그인정보가 일치하지 않습니다';
        return;
    }
    alert('로그인 성공!')
    messageElement.textContent = '';
}

function userIdkeyPressHandler (event){
    if (event.key === 'Enter') {
        userPwElement.focus();
    }
}

function userPasswordKeyPressHandler (event) {
    if (event.key === 'Enter') {
        onSignInButtonClickHandler();
    }
}

signInButton.addEventListener('click', onSignInButtonClickHandler);
userIdElement.addEventListener('keypress', userIdkeyPressHandler);
userPwElement.addEventListener('keypress', userPasswordKeyPressHandler);