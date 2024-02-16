function calculateArea() {
  //base and lenght
  const a = getInputById("triangleBase");
  const b = getInputById("triangleHeight");

  // calculating
  const area = a * b;

  setInnertextById("result", area);

  console.log(a, b, area);
}

function getInputById(element) {
  const inputFieldText = document.getElementById(element).value;
  const inputValue = parseFloat(inputFieldText);
  return inputValue;
}

function setInnertextById(elementId, area) {
  const setElement = document.getElementById(elementId);
  setElement.value = area;
}
