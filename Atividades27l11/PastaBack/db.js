const { Connection } = require("tedious");
const config = {
  server: "localhost",

  authentication: {
    type: "default",

    options: {
      userName: "NovoLogonSql",
      password: "esqu3ciasenh49",
    },
  },
  options: {
    database: "Atividades27l11",
    // Nome do banco de dados
    encrypt: false, // Desativar criptografia (pode mudar se necessário)
    port: 1433, // Porta padrão do SQL Server
    trustServerCertificate: true, // Necessário para evitar erro de SSL em ambiente local
  },
};
// Função para criar uma nova conexão com o banco de dados
function createConnection() {
  return new Connection(config); // Retorna uma nova instância da classe Connection
}
module.exports = createConnection; // Exporta a função createConnection
