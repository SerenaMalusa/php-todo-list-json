<?php

// get the new data for the task from the POST and save it in an array
$task_index = $_POST['index'];
$new_task = [
    'text' => $_POST['taskText'],
    'done' => $_POST['taskDone'] === 'true',
];

// get the array from the db and render it usable in php
$tasks = json_decode(file_get_contents('../data/tasks.json'), true);

// get the task with the specified index and change it, 
// then rearrange the array in keys ascending order
$tasks[$task_index] = $new_task;
ksort($tasks);

// transform the final array in json and rewrite the db
file_put_contents('../data/tasks.json', json_encode($tasks));

// print the response
header('Content-Type: application/json');
echo file_get_contents('../data/tasks.json');
