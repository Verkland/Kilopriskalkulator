const form = document.getElementById('calculator');
const resultDiv = document.getElementById('results');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const itemName = document.getElementById('item-name').value.trim();
  const itemPrice = parseFloat(document.getElementById('item-price').value);
  const itemWeight = parseFloat(document.getElementById('item-weight').value);

  if (itemName && itemPrice && itemWeight) {
    const pricePerKilo = (itemPrice / itemWeight) * 1000;

    const resultElement = document.createElement('p');
    resultElement.classList.add('result');
    // Inkluder forpakningspris i listen
    resultElement.textContent = `${itemName} (${itemWeight}g, ${itemPrice} kr): ${pricePerKilo.toFixed(2)} kr/kg`;

    if (resultDiv.childNodes.length > 0) {
      resultDiv.insertBefore(resultElement, resultDiv.childNodes[0]);
    } else {
      resultDiv.appendChild(resultElement);
    }

    // Tøm input-feltene
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
    document.getElementById('item-weight').value = '';
  }
})
  
  // ...
const copyResultsButton = document.getElementById('copy-button');

copyResultsButton.addEventListener('click', function () {
  const resultsText = Array.from(resultDiv.childNodes)
    .map((result) => result.textContent)
    .join('\n');

  if (resultsText) {
    const textArea = document.createElement('textarea');
    textArea.value = resultsText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert('Kiloprisene er kopiert til utklippstavlen');
  } else {
    alert('Det er ingen kilopriser å kopiere');
  }
});