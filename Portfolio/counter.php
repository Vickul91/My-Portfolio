<?php
class Site
{

public static function countView() {
      $counterFile = file("views.txt");
      $pages = array();
      $pages['page'] = array();
      $pages['count'] = array();
      foreach($counterFile as $line) {
          if (empty(trim($line))) {
              continue;
          }

          $data = explode(' ', $line);
          if (count($data) == 2) {
              $pages['page'][] = $data[0];
              $pages['count'][] = $data[1];
          }
      }

      if (in_array($_SERVER['REQUEST_URI'], $pages['page'])) {
          $key = array_search($_SERVER['REQUEST_URI'], $pages['page']);
          $pages['count'][$key] = intval($pages['count'][$key]) + 1;
      }
      else
      {
          $pages['page'][] = $_SERVER['REQUEST_URI'];
          $pages['count'][] = 1;
      }

      $fileContent = '';

      foreach($pages['page'] as $key => $page) {
          $fileContent .= $page . ' ' . $pages['count'][$key] . PHP_EOL;
      }

      file_put_contents("views.txt", $fileContent);
  }
}
