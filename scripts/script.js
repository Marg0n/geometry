function calculateTriangleArea() {
  //base and Height
  const a = getInputById("triangleBase");
  const b = getInputById("triangleHeight");

  // calculating Triangle area
  const area = 0.5 * a * b;

  setInnertextById("result", area);

  //reset input field
  setInputById("triangleBase");
  setInputById("triangleHeight");
}

function calculateRectangleArea() {
  //Width and Length
  const a = getInputById("rectangleWidth");
  const b = getInputById("rectangleLength");

  // calculating Rectangle area
  const area = a * b;

  setInnertextById("result", area);

  //reset input field
  setInputById("rectangleWidth");
  setInputById("rectangleLength");
}

function calculateParallelogramArea() {
  //base and Height
  const a = getInputById("parallelogramBase");
  const b = getInputById("parallelogramHeight");

  // calculating Parallelogram area
  const area = a * b;

  setInnertextById("result", area);

  //reset input field
  setInputById("parallelogramBase");
  setInputById("parallelogramHeight");
}

function calculateRhombusArea() {
  //Diagonal 1 and Diagonal 2
  const a = getInputById("rhombusDiagonal1");
  const b = getInputById("rhombusDiagonal2");

  // calculating Rhombus area
  const area = 0.5 * a * b;

  setInnertextById("result", area);

  //reset input field
  setInputById("rhombusDiagonal1");
  setInputById("rhombusDiagonal2");
}

function calculatePentagonArea() {
  //Perimeter and Apothem
  const a = getInputById("pentagonPerimeter");
  const b = getInputById("pentagonApothem");

  // calculating Pentagon area
  const area = 0.5 * a * b;

  setInnertextById("result", area);

  //reset input field
  setInputById("pentagonPerimeter");
  setInputById("pentagonApothem");
}

function calculateEllipseArea() {
  //SemiMajor and SemiMinor
  const a = getInputById("ellipseSemiMajor");
  const b = getInputById("ellipseSemiMinor");

  // calculating Ellipse area
  const area = 3.1416 * a * b;

  setInnertextById("result", area);

  //reset input field
  setInputById("ellipseSemiMajor");
  setInputById("ellipseSemiMinor");
}

function getInputById(element) {
  const inputFieldText = document.getElementById(element).value;
  const inputValue = parseFloat(inputFieldText);
  return inputValue;
}

function setInputById(element) {
  const inputFieldText = document.getElementById(element);
  inputFieldText.value = "";
}

function setInnertextById(elementId, area) {
  const setElement = document.getElementById(elementId);

  if (isNaN(area)) {
    setElement.value = "Input Number";
  } else {
    setElement.value = area;
  }
}
