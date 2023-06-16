const date = document.querySelector('#date');
const reset = document.querySelector('#reset');
const calculate = document.querySelector('#calculate');
const cal = document.querySelector('#calculatedAge');

calculate.addEventListener('click', () => {
  function calculateAge(birthDate) {
    const today = new Date();
    const birthDateValue = new Date(birthDate.value);
    const age = today.getFullYear() - birthDateValue.getFullYear();
    const monthDiff = today.getMonth() - birthDateValue.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateValue.getDate())) {
      age--;
    }

    return age;
  }

  var age = calculateAge(date);
  cal.innerHTML = `Calculated age is ${age} year`;
});
