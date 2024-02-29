<?php

$json_tasks = file_get_contents('../data/tasks.json');

// header ('Content-Type: application/json');
header('Content-Type: application/json');

echo $json_tasks;
