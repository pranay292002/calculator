let result = '';

function addToResult(value) {
  result += value;
  document.getElementById('result').value = result;
}

function clearResult() {
  result = '';
  document.getElementById('result').value = result;
}

function calculate() {
  try {
    result = eval(result);
    document.getElementById('result').value = result;
  } catch (error) {
    result = '';
    document.getElementById('result').value = 'Error';
  }
}
