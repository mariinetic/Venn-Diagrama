function updateVennDiagram() {
  const A = document.getElementById('a').value.replace(".", ",") || ""; // Joga em A
  const B = document.getElementById('b').value.replace(".", ",") || ""; // Joga em B
  const C = document.getElementById('c').value.replace(".", ",") || ""; // Joga em C

  // No minimo 10 valores
  const textoA = A.length > 10 ? A.substring(0, 15) : A;
  const TextoB = B.length > 10 ? B.substring(0, 15) : B;
  const TextoC = C.length > 10 ? C.substring(0, 15) : C;

  // Joga os números pra dentro do diagrama
  document.getElementById('textA').textContent = textoA;
  document.getElementById('textB').textContent = TextoB;
  document.getElementById('textC').textContent = TextoC;
}
