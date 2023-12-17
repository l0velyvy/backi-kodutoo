function calculatePythagorean() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
 
    if (isNaN(sideA) || isNaN(sideB)) {
      alert('Kirjuta mõlema külje pikkused.');
      return;
    }
 
    const hypotenuse = pythagoreanTheorem(sideA, sideB);
 
    document.getElementById('result').innerText = `C külje pikkus ehk hüpotenuus: ${hypotenuse}`;
  }
 
  function pythagoreanTheorem(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  }
