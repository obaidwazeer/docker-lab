<?php

echo "<h1>Docker Project 02</h1>";

echo "<p>PHP-FPM is running inside a container.</p>";

echo "<p>Container hostname: " . htmlspecialchars(gethostname()) . "</p>";

echo "<p>PHP version: " . htmlspecialchars(PHP_VERSION) . "</p>";