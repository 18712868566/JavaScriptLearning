document.writeln("<!-- JiaThis Button BEGIN -->");
document.writeln("<div class=\"jiathis_style_24x24\">");
document.writeln("	<a class=\"jiathis_button_qzone\"></a>");
document.writeln("	<a class=\"jiathis_button_tsina\"></a>");
document.writeln("	<a class=\"jiathis_button_tqq\"></a>");
document.writeln("	<a class=\"jiathis_button_weixin\"></a>");
//document.writeln("	<a class=\"jiathis_button_renren\"></a>");
//document.writeln("	<a href=\"http://www.jiathis.com/share\" class=\"jiathis jiathis_txt jtico jtico_jiathis\" target=\"_blank\"></a>");
//document.writeln("	<a class=\"jiathis_counter_style\"></a>");
document.writeln("</div>");
document.writeln("<script type=\"text/javascript\" charset=\"utf-8\">");
document.writeln("var jiathis_config = {appkey:{'tsina':'998339573'}};");
document.writeln("</script>");
document.writeln("<script type=\"text/javascript\" src=\"http://v3.jiathis.com/code/jia.js\" charset=\"utf-8\"></script>");
document.writeln("<!-- JiaThis Button END -->");

$(".jiathis_style_24x24").eq(0).attr('className', 'jiathis_style_32_big');
