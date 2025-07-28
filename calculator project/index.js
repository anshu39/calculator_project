
let resultBox = document.getElementById('result');


function append(val) {
  resultBox.value += val;
}


function clearResult() {
  resultBox.value = '';
}


function del() {
  resultBox.value = resultBox.value.slice(0, -1);
}

function calculate() {
  try {
    
    let exp = resultBox.value.replace(/%/g, '/100');
    resultBox.value = eval(exp);
  } catch (e) {
    resultBox.value = 'Error';
  }
}