<?php

$json_tasks = file_get_contents('../data/tasks.json');

$tasks = json_decode($json_tasks, true);

var_dump($tasks);
