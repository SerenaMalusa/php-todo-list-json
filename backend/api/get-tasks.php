<?php

// header ('Content-Type: application/json');
header('Content-Type: application/json');

echo file_get_contents('../data/tasks.json');
