<?php
$host = getenv("DB_HOST") ?: "localhost";
$dbname = getenv("DB_NAME") ?: "dv0881";
$username = getenv("DB_USER") ?: "dv0881";
$password = getenv("DB_PASS") ?: "eNr7rxk7Mwf4Y7HeKPzu";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password
    );

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}