//加载页面
$(function(){
    $('.left_li').click(function(){
        // console.log("111")
        //获取标题
        let text = $(this).text().trim();
        //动态获取标题
        $('#content_title').text(text);
        //加载页面
        if (text == '首页') {
            $('.content_display').load('./pages/home.html'); 
          } else if (text == '系统管理') {
            $('.content_display').load('./pages/system.html');
          } else if (text == '公寓管理') {
            $('.content_display').load('./pages/apartment.html');
            
          } else if (text == '学生功能') {
            $('.content_display').load('./pages/user.html');
          }else{
            return;
          }
    });
});

// 改变标签样式
$(function(){
  $('.left_ul li').click(function(){
      // 设定样式变化之前 重置所有的样式
    $('.left_ul li').css({
      backgroundColor: 'rgb(1, 70, 116)',
      color: '#fff'
    })
    // this
    $(this).css({
      backgroundColor: '#fff',
      color: '#000'
    })
  })
  $('.left_li:first').click();
  // $('.left_li:second').click();

})


