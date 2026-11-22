const numberInput = document.getElementById("number");
const limitInput = document.getElementById("limit");
const generateBtn = document.getElementById("generate");
const errorEl = document.getElementById("error");
const output = document.getElementById("output");

function generateTable() {
  const num = Number(numberInput.value);
  const limit = Number(limitInput.value);

  output.innerHTML = "";
  errorEl.textContent = "";

  if (numberInput.value === "" || !Number.isFinite(num)) {
    errorEl.textContent = "Enter a number to generate its table.";
    return;
  }

  if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
    errorEl.textContent = "Table length must be a whole number from 1 to 100.";
    return;
  }

  const table = document.createElement("table");
  table.innerHTML = "<tr><th colspan='2'>Table of " + num + "</th></tr>";

  for (let i = 1; i <= limit; i++) {
    const row = document.createElement("tr");
    const expression = document.createElement("td");
    const result = document.createElement("td");

    expression.textContent = num + " × " + i;
    result.textContent = Math.round(num * i * 1e10) / 1e10;

    row.appendChild(expression);
    row.appendChild(result);
    table.appendChild(row);
  }

  output.appendChild(table);
}

generateBtn.addEventListener("click", generateTable);

[numberInput, limitInput].forEach(function (input) {
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") generateTable();
  });
});
