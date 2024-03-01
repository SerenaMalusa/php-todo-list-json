<?php

// get the data from POST and save it
$task_index = $_POST['index'];

// get the array from the db and render it usable in php
$tasks = json_decode(file_get_contents('../data/tasks.json'), true);

// delete the task with the specific order then rearrange the array
unset($tasks[$task_index]);
ksort($tasks);

// transform the final array in json and rewrite the db
file_put_contents('../data/tasks.json', json_encode($tasks));

// print the response
header('Content-Type: application/json');
echo file_get_contents('../data/tasks.json');
