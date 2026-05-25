function handleSignup() {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var goal = document.getElementById('goal').value;

  if (!name || !email || !goal) {
    alert('Please fill in all fields to get started!');
    return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  var btn = document.getElementById('signupBtn');
  var firstName = name.split(' ')[0];
  btn.textContent = '✓ Welcome, ' + firstName + '!';
  btn.style.background = '#1A6B40';
  btn.disabled = true;

  var msg = document.getElementById('successMsg');
  msg.style.display = 'block';
}