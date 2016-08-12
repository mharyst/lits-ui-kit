//Open/Close dropdown
document.querySelector('.dropbtn').addEventListener('click', function () {
  document.querySelector('.dropdown').classList.toggle('active');
});

function sliderChange(value) {
  rangevalue.value = value;
  rangevalue.style = 'left:' + value + '%;';
}
function sliderChange2(value) {
  rangevalue2.value = value;
  rangevalue2.style = 'left:' + value + '%;';
}
