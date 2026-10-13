<?php
// Trezio Hubspot Admin API. You do not need to edit this file.
session_set_cookie_params(['httponly'=>true,'samesite'=>'Strict','secure'=>!empty($_SERVER['HTTPS'])]);
session_start();
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
$root=__DIR__;$authf=$root.'/data/auth.php';$sitef=$root.'/data/site.json';
function out($a,$c=200){http_response_code($c);echo json_encode($a);exit;}
function put($f,$s){$t=$f.'.tmp';if(@file_put_contents($t,$s,LOCK_EX)===false){out(['ok'=>false,'error'=>'The server could not save the file. Make sure the "data" and "uploads" folders are writable (permission 755 or 775).'],500);}@rename($t,$f);}
function setauth($u,$h,$d){global $authf;put($authf,"<?php exit; ?>\n".json_encode(['user'=>$u,'hash'=>$h,'default'=>$d]));}
function getauth(){global $authf;if(!is_file($authf)){setauth('admin',password_hash('Admin@123',PASSWORD_DEFAULT),true);}$c=file_get_contents($authf);return json_decode(substr($c,strpos($c,"\n")+1),true);}
$act=$_GET['action']??'';
$in=json_decode(file_get_contents('php://input'),true);if(!is_array($in))$in=[];
if($act==='login'){
  usleep(700000);$a=getauth();
  if(hash_equals((string)$a['user'],(string)($in['u']??''))&&password_verify((string)($in['p']??''),$a['hash'])){
    session_regenerate_id(true);$_SESSION['ok']=1;$_SESSION['csrf']=bin2hex(random_bytes(16));
    out(['ok'=>true,'csrf'=>$_SESSION['csrf'],'defaultPw'=>!empty($a['default'])]);
  }
  out(['ok'=>false,'error'=>'Wrong username or password.'],401);
}
if($act==='check'){
  if(!empty($_SESSION['ok'])){$a=getauth();out(['ok'=>true,'csrf'=>$_SESSION['csrf'],'defaultPw'=>!empty($a['default'])]);}
  out(['ok'=>false]);
}
if(empty($_SESSION['ok']))out(['ok'=>false,'error'=>'Please log in again.'],401);
if(!hash_equals((string)$_SESSION['csrf'],(string)($_SERVER['HTTP_X_CSRF']??'')))out(['ok'=>false,'error'=>'Your session expired. Reload this page and log in again.'],403);
if($act==='logout'){session_destroy();out(['ok'=>true]);}
if($act==='save'){
  if(!isset($in['texts'],$in['settings'])||!is_array($in['texts'])||!is_array($in['settings']))out(['ok'=>false,'error'=>'Invalid data.'],400);
  if(!in_array($in['theme']??'',['charcoal','midnight','slate','emerald'],true))$in['theme']='charcoal';
  $j=json_encode($in,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT);
  if($j===false||strlen($j)>2000000)out(['ok'=>false,'error'=>'The data is too large or invalid.'],413);
  put($sitef,$j);out(['ok'=>true]);
}
if($act==='upload'){
  $f=$_FILES['f']??null;
  if(!$f||$f['error']!==0)out(['ok'=>false,'error'=>'Upload failed. The image may be too large for your hosting. Try one under 2 MB.'],400);
  if($f['size']>5*1024*1024)out(['ok'=>false,'error'=>'The image is over 5 MB. Please choose a smaller one.'],400);
  $i=@getimagesize($f['tmp_name']);$m=['image/jpeg'=>'jpg','image/png'=>'png','image/webp'=>'webp','image/gif'=>'gif'];
  if(!$i||!isset($m[$i['mime']]))out(['ok'=>false,'error'=>'Please choose a JPG, PNG, WebP or GIF image.'],400);
  $d=$root.'/uploads';if(!is_dir($d))@mkdir($d,0755,true);
  $n='img-'.bin2hex(random_bytes(6)).'.'.$m[$i['mime']];
  if(!move_uploaded_file($f['tmp_name'],$d.'/'.$n))out(['ok'=>false,'error'=>'Could not store the image. Make sure the "uploads" folder is writable.'],500);
  out(['ok'=>true,'url'=>'uploads/'.$n]);
}
if($act==='changepw'){
  $a=getauth();$n=(string)($in['new']??'');$u=trim((string)($in['user']??''));if($u==='')$u=$a['user'];
  if(!password_verify((string)($in['cur']??''),$a['hash']))out(['ok'=>false,'error'=>'Your current password is not correct.'],400);
  if(strlen($n)<8)out(['ok'=>false,'error'=>'The new password must be at least 8 characters.'],400);
  setauth($u,password_hash($n,PASSWORD_DEFAULT),false);out(['ok'=>true]);
}
out(['ok'=>false,'error'=>'Unknown action.'],400);
