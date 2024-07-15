const fs = require('fs');
const path = require('path');

// Diretório onde os relatórios são gerados
const reportDir = path.join(__dirname, 'cypress/results');
const reportFiles = fs.readdirSync(reportDir).filter(file => file.endsWith('.html'));

// Variáveis para armazenar contadores de resultados de testes
let totalPass = 0;
let totalFail = 0;
let totalPending = 0;

// Iterar sobre cada arquivo de relatório
reportFiles.forEach(file => {
  const reportPath = path.join(reportDir, file);

  // Ler o conteúdo do relatório
  let reportContent = fs.readFileSync(reportPath, 'utf-8');

  // Contar casos de pass, fail e pending usando expressões regulares
  totalPass += (reportContent.match(/class="pass"/g) || []).length;
  totalFail += (reportContent.match(/class="fail"/g) || []).length;
  totalPending += (reportContent.match(/class="pending"/g) || []).length;
});

// Script para adicionar Chart.js
const chartScript = `
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    var data = {
        labels: ["Pass", "Fail", "Pending"],
        datasets: [{
            label: "Test Results",
            data: [${totalPass}, ${totalFail}, ${totalPending}],
            backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 206, 86, 0.2)"
            ],
            borderColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 206, 86, 1)"
            ],
            borderWidth: 1
        }]
    };

    var config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    window.onload = function() {
        var ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, config);
    };
</script>
`;

// Canvas do gráfico
const chartCanvas = '<canvas id="myChart" width="400" height="400"></canvas>';

// Adicionar o canvas e o script ao relatório
reportFiles.forEach(file => {
  const reportPath = path.join(reportDir, file);
  let reportContent = fs.readFileSync(reportPath, 'utf-8');
  reportContent = reportContent.replace('</body>', `${chartCanvas}${chartScript}</body>`);
  fs.writeFileSync(reportPath, reportContent, 'utf-8');
});

console.log('Relatório MochaAwesome modificado com gráfico combinado de todos os testes.');
