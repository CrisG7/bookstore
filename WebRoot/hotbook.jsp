<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page language="java" import="com.Dao.indexDao"%>
<%@page import="com.Bean.HotsaleBean"%>
<html>
<head>
    <title>热销书籍</title>
</head>
<link href="css/hotbook.css" rel="stylesheet" style="text/css"/>
<script src="js/jquery-3.1.1.js"></script>
<script src="js/hotbook.js"></script>
<body>
<div class="container">
    <div id="bar">
    <span class="logo">
      <a href="index.php"><img src="image/icon/new_logo.png"></a>
    </span>
    <span class="find">
      <span class="search">
        <input type="search" name="search">
      </span>
    </span>
    <span class="user">
     
          <span class="headicon"><img src="<?=$grow['head_pic']?>"></span>
          <span class="username">???????????</span>

          <a href="login.php"><span style="line-height: 50px;height: 50px;">请登录</span></a>

    </span>
    <span class="menu">
      <span class="menu_content"></span>
      <ul>
          <div class="welcome mt">
             
                  <form method="post" class="logout"><input type="submit" name="logout" value="注销"> </form>
 
                  <a href="login.php"><span style="line-height: 50px;height: 50px;">请登录</span></a>

          </div>
          <li><a href="option.php">购物车</a></li>
          <li><a href="option.php">账号设置</a></li>
          <div class="goto mt">前往：</div>
          <li><a href="index.php">首页</a></li>
          <li><a href="classify.php">图书分类</a></li>
          <li><a href="discount.php">图书优惠</a></li>
          <li><a href="hotbook.php">热销图书</a></li>
          <span class="end"></span>
      </ul>
    </span>
    </div>

    <div class="hotsale">
        <div class="hot_title">
            <span class="title">销量前三</span>
        </div>
        <%indexDao dao=new indexDao();
		    	List list=(List)dao.getHotsale();
		    	for(int i=0;i<list.size();i++){
		    		HotsaleBean t = (HotsaleBean) list.get(i);%>
        <div class="three">
            <div class="item">
                <img src="<%t.getCover();%>">
                <span class="name"><%t.getTitle();%></span>
                <span class="price">￥<%t.getPrice();%></span>
                <span class="origin"><? if($row['origin_price']!="")echo "￥";?><?=$row['origin_price']?></span>
            </div>
            <div class="item_info">
                <span class="title"><%t.getTitle();%></span>
                <span class="author"><%t.getAu_name();%></span>
                <br>
                <span class="info"><%t.getTitle_introduction();%></span>
                <span class="salenum"><%t.getSale_num();%>名读友已购买</span>
            </div>
        </div>
        <%}%>
    </div>


    <div class="hot_title">
        <span class="title">销量前十</span>
    </div>

    <div class="afterthree">
       <%indexDao dao1=new indexDao();
		    	List list1=(List)dao.getHottitle();
		    	for(int i=0;i<list1.size();i++){
		    		HotsaleBean t1 = (HotsaleBean) list1.get(i);%>
        <div class="three">
            <div class="item">
                <img src="<%t1.getCover();%>">
                <span class="name"><%t1.getTitle();%></span>
                <span class="price">￥<%t1.getPrice();%></span>
                <span class="origin"><? if($row['origin_price']!="")echo "￥";?><?=$row['origin_price']?></span>
            </div>
            <div class="item_info">
                <span class="title"><%t1.getTitle();%></span>
                <span class="author"><%t1.getAu_name();%></span>
                <br>
                <span class="info"><%t1.getTitle_introduction();%></span>
                <span class="salenum"><%t1.getSale_num();%>名读友已购买</span>
            </div>
        </div>
        <%}%>

    </div>


</div>
</body>
</html>