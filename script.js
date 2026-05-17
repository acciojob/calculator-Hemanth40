const input = document.getElementById("input");

for (let i = 0; i <= 9; i++) {
  document.getElementById(`block${i}`).addEventListener("click", () => {
    input.value += i;
  });
}

document.getElementById("plus").addEventListener("click", () => {
  input.value += "+";
});

document.getElementById("minus").addEventListener("click", () => {
  input.value += "-";
});

document.getElementById("multiply").addEventListener("click", () => {
  input.value += "*";
});

document.getElementById("divide").addEventListener("click", () => {
  input.value += "/";
});

document.getElementById("dot").addEventListener("click", () => {
  input.value += ".";
});

document.getElementById("clr").addEventListener("click", () => {
  input.value = "";
});

document.getElementById("back").addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

document.getElementById("ans").addEventListener("click", () => {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
});