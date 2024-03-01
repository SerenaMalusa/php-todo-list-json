<?php

// get the new data for the task from the POST and save it in an array
$task_index = $_POST['index'];
$new_task = [
    'text' => $_POST['taskText'],
    'done' => $_POST['taskDone'] === 'true',
];

// get the array from the db and render it usable in php
$json_tasks = file_get_contents('../data/tasks.json');
$tasks = json_decode($json_tasks, true);

// get the task with the specified index and change it
$tasks[$task_index] = $new_task;

// transform the final array in json and rewrite the db
$json_tasks = json_encode($tasks);
file_put_contents('../data/tasks.json', $json_tasks);

// print the response
header('Content-Type: application/json');
echo $json_tasks;
