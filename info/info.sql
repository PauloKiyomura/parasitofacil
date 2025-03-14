USE feedback;  -- Certifica-se de que o banco de dados 'feedback' está selecionado

CREATE TABLE mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY, -- ID único e gerado automaticamente
    nome VARCHAR(255) NOT NULL,        -- Nome da pessoa que enviou a mensagem
    mensagem TEXT NOT NULL,            -- Conteúdo da mensagem
    data_enviada TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Data e hora em que a mensagem foi enviada (opcional)
);