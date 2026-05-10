<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

require "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$userId = $data["userId"];
$stats = $data["stats"];
$tasks = $data["tasks"];

$stmt = $pdo->prepare("
    INSERT INTO progress 
    (user_id, money, eco, happy, quiz_answered, gallery_viewed, policy_made)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
    money = VALUES(money),
    eco = VALUES(eco),
    happy = VALUES(happy),
    quiz_answered = VALUES(quiz_answered),
    gallery_viewed = VALUES(gallery_viewed),
    policy_made = VALUES(policy_made)
");

$stmt->execute([
    $userId,
    $stats["money"],
    $stats["eco"],
    $stats["happy"],
    $tasks["quizAnswered"],
    $tasks["galleryViewed"],
    $tasks["policyMade"]
]);

echo json_encode(["success" => true]);