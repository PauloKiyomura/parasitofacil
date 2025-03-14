<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); // Permitir chamadas de outros domínios

// Configuração do banco de dados
$host = "localhost";  // Altere se necessário
$usuario = "root";     // Usuário do MySQL
$senha = "";          // Senha do MySQL
$banco = "dados.php"; // Nome do banco de dados

// Conectar ao MySQL
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verificar conexão
if ($conn->connect_error) {
    http_response_code(500); // Erro interno do servidor
    die(json_encode(["erro" => "Falha na conexão com o banco de dados."]));
}

// Consultar as mensagens
$sql = "SELECT nome, mensagem FROM mensagens ORDER BY id DESC";
$result = $conn->query($sql);

if ($result === false) {
    http_response_code(500); // Erro interno do servidor
    die(json_encode(["erro" => "Erro na consulta ao banco de dados."]));
}

$mensagens = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $mensagens[] = $row;
    }
}

// Fechar conexão
$conn->close();

// Retornar JSON
echo json_encode($mensagens);
?>
