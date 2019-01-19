<!DOCTYPE html>
<!-- this code is from an article located at https://linuxwebdevelopment.com/find-gcd-two-integers-php/ -->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Get GCD of two integers PHP</title>
  </head>
  <body>
  <?php include 'gcd.php';
  $first_integer = $_POST['integer1'];
  $second_integer= $_POST['integer2'];
  $calculated_gcd = gcd($first_integer, $second_integer);

  echo "the gcd of " . $first_integer . " and " . $second_integer . " is " . $calculated_gcd;
  echo "<br>Calculate again? <a href='get_data.php'>go back </a>";
  ?>
  </body>
</html>
