<?php
//----------------------------------
// 笑话大全调用示例代码 － 聚合数据
// 在线接口文档：http://www.juhe.cn/docs/95
//----------------------------------
// https://www.juhe.cn/docs/api/id/95
//http://v.juhe.cn/joke/randJoke.php?key=3706d4758d8e6b03e222019062fbaed8&type=pic
header('Content-type:text/html;charset=utf-8');


//配置您申请的appkey
$appkey = "3706d4758d8e6b03e222019062fbaed8";
//************1.按更新时间查询笑话************
$url = "http://japi.juhe.cn/joke/content/list.from";
$params = array(
      "sort" => "string",//类型，desc:指定时间之前发布的，asc:指定时间之后发布的
      "page" => "",//当前页数,默认1
      "pagesize" => "20",//每次返回条数,默认1,最大20
      "time" => "string",//时间戳（10位），如：1418816972
      "key" => $appkey,//您申请的key
);
$paramstring = http_build_query($params);
$content = juhecurl($url,$paramstring);
$result = json_decode($content,true);
if($result){
    if($result['error_code']=='0'){
        print_r($result);
    }else{
        echo $result['error_code'].":".$result['reason'];
    }
}else{
    echo "请求失败";
}
//**************************************************

//************2.最新笑话************
$url = "http://japi.juhe.cn/joke/content/text.from";
$params = array(
      "page" => "",//当前页数,默认1
      "pagesize" => "20",//每次返回条数,默认1,最大20
      "key" => $appkey,//您申请的key
);
$paramstring = http_build_query($params);
$content = juhecurl($url,$paramstring);
$result = json_decode($content,true);
if($result){
    if($result['error_code']=='0'){
        print_r($result);
    }else{
        echo $result['error_code'].":".$result['reason'];
    }
}else{
    echo "请求失败";
}
//**************************************************
//************3.按更新时间查询趣图************
$url = "http://japi.juhe.cn/joke/img/list.from";
$params = array(
      "sort" => "string",//类型，desc:指定时间之前发布的，asc:指定时间之后发布的
      "page" => "",//当前页数,默认1
      "pagesize" => "20",//每次返回条数,默认1,最大20
      "time" => "string",//时间戳（10位），如：1418816972
      "key" => $appkey,//您申请的key
);
$paramstring = http_build_query($params);
$content = juhecurl($url,$paramstring);
$result = json_decode($content,true);
if($result){
    if($result['error_code']=='0'){
        print_r($result);
    }else{
        echo $result['error_code'].":".$result['reason'];
    }
}else{
    echo "请求失败";
}
//**************************************************

//************4.最新趣图************
$url = "http://japi.juhe.cn/joke/img/text.from";
$params = array(
      "page" => "",//当前页数,默认1
      "pagesize" => "20",//每次返回条数,默认1,最大20
      "key" => $appkey,//您申请的key
);
$paramstring = http_build_query($params);
$content = juhecurl($url,$paramstring);
$result = json_decode($content,true);
if($result){
    if($result['error_code']=='0'){
        print_r($result);
    }else{
        echo $result['error_code'].":".$result['reason'];
    }
}else{
    echo "请求失败";
}
//**************************************************

/**
 * 请求接口返回内容
 * @param  string $url [请求的URL地址]
 * @param  string $params [请求的参数]
 * @param  int $ipost [是否采用POST形式]
 * @return  string
 */
function juhecurl($url,$params=false,$ispost=0){
    $httpInfo = array();
    $ch = curl_init();

    curl_setopt( $ch, CURLOPT_HTTP_VERSION , CURL_HTTP_VERSION_1_1 );
    curl_setopt( $ch, CURLOPT_USERAGENT , 'JuheData' );
    curl_setopt( $ch, CURLOPT_CONNECTTIMEOUT , 60 );
    curl_setopt( $ch, CURLOPT_TIMEOUT , 60);
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER , true );
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    if( $ispost )
    {
        curl_setopt( $ch , CURLOPT_POST , true );
        curl_setopt( $ch , CURLOPT_POSTFIELDS , $params );
        curl_setopt( $ch , CURLOPT_URL , $url );
    }
    else
    {
        if($params){
            curl_setopt( $ch , CURLOPT_URL , $url.'?'.$params );
        }else{
            curl_setopt( $ch , CURLOPT_URL , $url);
        }
    }
    $response = curl_exec( $ch );
    if ($response === FALSE) {
        //echo "cURL Error: " . curl_error($ch);
        return false;
    }
    $httpCode = curl_getinfo( $ch , CURLINFO_HTTP_CODE );
    $httpInfo = array_merge( $httpInfo , curl_getinfo( $ch ) );
    curl_close( $ch );
    return $response;
}
?>