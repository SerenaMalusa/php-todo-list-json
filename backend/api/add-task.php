<?php

// get the new task from the POST and save it in an array
$new_task_text = $_POST['newTask'];
$new_task = [
    'text' => $new_task_text,
    'done' => false
];

// get the array from the db and render it usable in php
$json_tasks = file_get_contents('../data/tasks.json');
$tasks = json_decode($json_tasks, true);

// add the new task to the tasks array
$tasks[] = $new_task;

// transform the final array in json and rewrite the db
$json_tasks = json_encode($tasks);
file_put_contents('../data/tasks.json', $json_tasks);

// print the response
header('Content-Type: application/json');
echo $json_tasks;
