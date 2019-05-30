<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.Bean.BookBean" %>
<%
indexdao dao=new indexdao();
dao.setTitle_id("11101");
 %>
<% if(isset($_GET['page']) && $_GET['page']>0){      
    int page=$_GET['page'];
}else{
    int page=1;   
}
%>

<% int pagesize=10;
$sql="select title_id,cover,title,price,origin_price,au_name,pub_date from titles,authors where titles.au_id=authors.au_id order by (origin_price-price) desc";
$stmt=$db->prepare($sql);
$stmt->execute();
int number=$stmt->rowCount();             
int pagecount=ceil(number/pagesize);%>

$page_down=($page-1)*$pagesize;
$sql_out="select title_id,cover,title,price,origin_price,au_name,pub_date from titles,authors where titles.au_id=authors.au_id order by (origin_price-price) desc limit ".$page_down.",".$pagesize;;
$result=$db->query($sql_out);
$result->setFetchMode(PDO::FETCH_ASSOC);
$n=$result->rowCount();

?>

<html>
<head>
    <title>优惠商品</title>
</head>
<link href="css/discount.css" rel="stylesheet" style="text/css"/>
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
          <span class="username">xxxxx</span>
     
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

    <div class="sale">
        <div class="hot_title">
            <span class="title">优惠商品</span>
        </div>
        <?
        while($row = $result->fetch()){
        ?>
        <div class="item">
            <img src="<?=$row['cover']?>">
    		<span class="book">
    			<span class="name"><?=$row['title']?></span>
    			<br>
    			<span class="author"><?=$row['au_name']?></span>
    		</span>

            <span class="time"><?=$row['pub_date']?></span>
            <span class="off">-<?
                if($row['origin_price']=="")echo 0;
                else echo 100-floor($row['price']/$row['origin_price']*100);
                ?>%</span>
    		<span class="sale_price">
	    		<span class="origin_price"><? if($row['origin_price']!="")echo "￥";?><?=$row['origin_price']?></span>
	    		<br>
	    		<span class="price">￥<?=$row['price']?></span>
    		</span>
        </div>
        <?}?>
    </div>
    <div class="pagebox">
        <?php
        if($page!=1){?>
            <a href='?page=<?=$page-1 ?>'><span id="changepage" class="bt">上一页</span></a>
        <?}
        if($page<6)$ins=1;
        else if($page>$pagecount-4)$ins=$pagecount-9;
        else $ins=$page-5;
        if($pagecount>10) {
            for ($i = $ins; $i <= $ins + 9; $i++) {
                if ($page == $i) {
                    ?>
                    <span class="pages" id="choose" class="bt"><?= $i ?></span>
                <? } else { ?>
                    <a href='?page=<?= $i ?>'><span class="pages bt"><?= $i ?></span></a>
                <?
                }
            }
        }else{
            for ($i = 1; $i <= $pagecount; $i++) {
                if ($page == $i) {
                    ?>
                    <span class="pages" id="choose" class="bt"><?= $i ?></span>
                <? } else { ?>
                    <a href='?page=<?= $i ?>'><span class="pages bt"><?= $i ?></span></a>
                <?
                }
            }
        }

        if($page<$pagecount){?>
            <a href='?page=<?=$page+1 ?>'><span id="changepage" class="bt">下一页</span></a>
        <?}
        ?>
    </div>

    <div class="foot">
    <span class="contract">

      <span class="about">关于我们</span>
      <span class="link">联系我们</span>
      <span class="join">加入我们</span>
      <span class="author">
<pre>
作者:龚某、李某、岑某
</pre>
      </span>
      <span class="payme">
        <img src="image/icon/payme.png">
      </span>
      <span class="joinus">
        <img src="image/icon/payme.png">
      </span>
    </span>
        <br>
        <span class="right">©2017-2018 Booksyi Entertainment. All Rights Reserved. </span>

    </div>

</div>
</body>
</html>