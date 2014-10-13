<?php

define('BASE_NAME', 'base');

// Local
if (preg_match('/localhost/', $_SERVER['HTTP_HOST'])) {
  define('DB_NAME', BASE_NAME . '_db');
  define('DB_USER', 'root');
  define('DB_PASSWORD', '');
  define('DB_HOST', 'localhost');
  define('WP_DEBUG', true);
  define( 'WP_CONTENT_URL', 'http://localhost/' . basename(__DIR__) . '/wp-content' );
  // define('WP_HOME','http://localhost/' . BASE_NAME);
  // define('WP_SITEURL','http://localhost/wp/' . BASE_NAME);
}

// Remote
else {
  define('DB_NAME', BASE_NAME . '_db');
  define('DB_USER', BASE_NAME . '_db');
  define('DB_PASSWORD', '');
  define('DB_HOST', 'localhost');
  define( 'WP_CONTENT_URL', '' );
}

$table_prefix  = BASE_NAME . '_';

define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');
define('WP_CONTENT_DIR', dirname(__FILE__) . '/wp-content' );
define('AUTOMATIC_UPDATER_DISABLED', true);
define('DISALLOW_FILE_EDIT', true);


// Authentication Unique Keys and Salts.
// https://api.wordpress.org/secret-key/1.1/salt/ 

define('AUTH_KEY',         '8ID#LF1YbgI)|I!++*$}J;lT8p7Nd rGg!kJtg<.s-zjl[B.h0^A%4fW.NHC_L0)');
define('SECURE_AUTH_KEY',  '|+ASUtR_rEjZ+=VtBkTjpzC;v}O<9;omgSf`Ep-2b`UMgnhZn1o[>V)N5~9(nP4+');
define('LOGGED_IN_KEY',    '5tU%?e.3T_t#N((`B.]:m/dm;gdb]sY=[$_v?XC JwV#8)un)fzLiFTd&pMp=NP;');
define('NONCE_KEY',        'r-.i$un-%4E+!5_SOD2@P6l6P-):tphj2Ju2~G7XV-N&Hm#qjk.;z+N]Eiym?jN&');
define('AUTH_SALT',        'xv9BnzO:dy-~sO5wm~xDa[?!Mx6^[PO67:RG#`RUqC1$hg*z}@&$+)?Al[,9FcC|');
define('SECURE_AUTH_SALT', 'c1!gnI_%gZ$h[4-ap9 &=|p`-[Zw08@_0Mr,%)W36yH:47IL%|I5I`:M]-HL!TE0');
define('LOGGED_IN_SALT',   'iuV!M*1&n(@!(=|F;.iT[:*+p7O:C3{hkPj/a<-^$mtj*<0Fyg!nFK_+2h19a -S');
define('NONCE_SALT',       '+n-iGgeJeGy#+#DvtL+3[A28L)2V*x%74(p 1 phNov}%X0!MaMN{fw@u=!Rr*+2');

// Absolute path to the WordPress directory. 
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

// Sets up WordPress vars and included files. 
require_once(ABSPATH . 'wp-settings.php');

