const displayEl = document.getElementById("display");
let expression = "";
let justEvaluated = false;

// Format a raw expression string for display
function formatForDisplay(str) {
  if (str === "") return "0";
  return str.replace(/(\d+(\.\d+)?)/g, (match) => {
    const parts = match.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  });
}

function updateDisplay() {
  displayEl.textContent = formatForDisplay(expression);
}

function appendValue(val) {
  if (justEvaluated) {
    if (/[0-9.]/.test(val)) {
      expression = "";
    }
    justEvaluated = false;
  }

  const operators = ["+", "-", "*", "/"];

  if (operators.includes(val)) {
    if (expression === "" && val !== "-") return; // no leading operator except minus
    const lastChar = expression.slice(-1);
    if (operators.includes(lastChar)) {
      expression = expression.slice(0, -1) + val; // replace last operator
    } else {
      expression += val;
    }
  } else if (val === ".") {
    // Prevent multiple decimals in the current number segment
    const lastSegment = expression.split(/[\+\-\*\/]/).pop();
    if (lastSegment.includes(".")) return;
    expression += lastSegment === "" ? "0." : ".";
  } else {
    expression += val;
  }

  updateDisplay();
}

function deleteLast() {
  if (justEvaluated) {
    expression = "";
    justEvaluated = false;
  } else {
    expression = expression.slice(0, -1);
  }
  updateDisplay();
}

function resetAll() {
  expression = "";
  justEvaluated = false;
  updateDisplay();
}

function evaluateExpression() {
  if (expression === "") return;
  try {
    // Strip trailing operator before evaluating
    const cleanExpr = expression.replace(/[\+\-\*\/.]+$/, "");
    if (cleanExpr === "") return;

    let result = eval(cleanExpr);

    if (typeof result !== "number" || !isFinite(result)) {
      displayEl.textContent = "Error";
      expression = "";
      justEvaluated = true;
      return;
    }

    // Round to avoid floating point artifacts
    result = Math.round((result + Number.EPSILON) * 1e10) / 1e10;

    expression = String(result);
    justEvaluated = true;
    updateDisplay();
  } catch (e) {
    displayEl.textContent = "Error";
    expression = "";
    justEvaluated = true;
  }
}

document.querySelectorAll(".key[data-val]").forEach((btn) => {
  btn.addEventListener("click", () => appendValue(btn.dataset.val));
});

document.getElementById("del").addEventListener("click", deleteLast);
document.getElementById("reset").addEventListener("click", resetAll);
document.getElementById("equals").addEventListener("click", evaluateExpression);

// Keyboard support
window.addEventListener("keydown", (e) => {
  if (/[0-9]/.test(e.key)) {
    appendValue(e.key);
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === ".") {
    appendValue(".");
  } else if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();
    evaluateExpression();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    resetAll();
  }
});

updateDisplay();
