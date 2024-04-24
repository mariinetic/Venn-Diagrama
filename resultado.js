  // Atualiza o diagrama quando o botão é clicado
        function updateVennDiagram() {
            const A = document.getElementById('a').value.replace(".", ",") || ""; // Joga em A
            const B = document.getElementById('b').value.replace(".", ",") || ""; // Joga em B
            const C = document.getElementById('c').value.replace(".", ",") || ""; // Joga em C

            // No minimo 10 valores
            const aText = a.length > 10 ? a.substring(0, 15) : a;
            const bText = b.length > 10 ? b.substring(0, 15) : b;
            const cText = c.length > 10 ? c.substring(0, 15) : c;

            // Joga os números pra dentro do diagrama
            document.getElementById('textA').textContent = aText;
            document.getElementById('textB').textContent = bText;
            document.getElementById('textC').textContent = cText;
        }
