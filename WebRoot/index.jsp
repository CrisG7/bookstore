<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page language="java" import="com.Dao.indexDao"%>
<%@page import="com.Bean.indexHotBookBean"%>
<%@page import="com.Bean.CommentBean"%>
<%@page import="com.Bean.GuessBean"%>
<head>
  <title>index</title>

</head>
<link href="css/index.css" rel="stylesheet" style="text/css"/>  
<script src="js/jquery-3.1.1.js"></script>
<script src="js/index.js"></script>
<body>
<div id="contianer">
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
     
          <span class="headicon">
             
              <a href="admin.php">
                  <a href="option.php">
              <img src="<?=$grow['head_pic']?>">
          </span>
          <span class="username">???</span></a>
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



  <div class="slide" id="sl">
    <div class="item active"><img src="image/face/index.jpg" alt=""></div>
    <div class="item"><img src="image/face/目送.jpg" alt=""></div>
    <div class="item"><img src="image/face/为你洒下阳光.jpg" alt=""></div>
    <div class="item"><img src="image/face/皮囊.jpg" alt=""></div>

    <div class="pager">
      <div class="round active"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>

    <a href="javascript:void(0);" class="control prev"> < </a>
    <a href="javascript:void(0);" class="control next"> > </a>
  </div>

  <div class="hot_sale">
    <div class="hot_title"> 
      <span class="title">热销书籍</span>
      <a href="hotbook.php">
        <span class="more">更多</span>
      </a>
    </div>
    <div class="hot_books">
        <%indexDao dao=new indexDao();
		    	List list=(List)dao.getHotbook();
		    	for(int i=0;i<list.size();i++){
		    		indexHotBookBean t = (indexHotBookBean) list.get(i);%>
     <div class="hot_item"> 
        <a href="item.php?id=<?=$row['title_id']?>">
            <img src="<%t.getCover();%>">
        </a>
        <div class="name"><%t.getTitle();%></div>
        <div class="price">￥<%t.getPrice();%></div>
       <div class="origin_price"><% if(t.getOrigin_price()!=0) {out.print("￥");}%><%t.getOrigin_price();%></div>
      </div>
      <%}%>
    </div>

  </div>

  <div class="new_book"> 
    <div class="hot_title"> 
      <span class="title">新书推荐</span>
      <span class="more">更多</span>
    </div>
     <div class="new_books">
        <%indexDao dao1=new indexDao();
		    	List list1=(List)dao1.getNewbook();
		    	for(int i=0;i<list1.size();i++){
		    		indexHotBookBean t1 = (indexHotBookBean) list1.get(i);%>
      <span class="new_item">
        <a href="item.php?id=<?=$row['title_id']?>">
            <img src="<?=$row['cover']?>">
        </a>
        <div class="intro"> 
          <div class="name"><%t1.getTitle();%></div>
          <div class="tro"><%t1.getTitle_introduction();%></div>
        </div>
      </span>
      <%}%>
    </div>
  </div>

  <div id="discount">
    <hr>
    <p>
    优惠书籍
    </p>
    <hr>
    <span class="dis_pre ctrl"><</span>
       <div class="items">
       <%indexDao dao2=new indexDao();
		    	List list2=(List)dao2.getDiscountbook();
		    	for(int i=0;i<list2.size();i++){
		    		indexHotBookBean t2 = (indexHotBookBean) list2.get(i);%>
        <span class="dis_book">
        <a href="item.php?id=<?=$row['title_id']?>">
            <img src="<?=$row['cover']?>">
        </a>
          <div class="name"><%t2.getTitle();%></div>
          <div class="price">￥<%t2.getPrice();%></div>
          <div class="origin_price">￥<%t2.getOrigin_price();%></div>
        </span>
        <%}%>
      </div>
    <span class="dis_next ctrl">></span>
  </div>

  <div class="hot_comment"> 
    <div class="hot_title"> 
      <span class="title">上墙评论</span>
    </div>
    <%indexDao dao3=new indexDao();
		    	List list3=(List)dao3.getConmment();
		    	for(int i=0;i<list3.size();i++){
		    		CommentBean t3 = (CommentBean) list3.get(i);%>
    <div class="comment">
       <a href="item.php?id=<?=$row['title_id']?>">
      <img src="<?=$row['cover']?>" class="bk">
        </a>
      <span class="user_comment"> 
        <img src="<?=$row['head_pic']?>" class="hc">
        <span class="name"><%t3.getUsername();%></span>
        <span class="time"><%t3.getComment_date();%></span>
        <br>
        <span class="content"><%t3.getContent();%></span>
      </span>
    </div>
    <%}%>
  </div>

  <div class="week_book"> 
    <div class="hot_title"> 
      <span class="title">猜你喜欢</span>
    </div>
   <%indexDao dao4=new indexDao();
		    	List list4=(List)dao4.getGuess();
		    	for(int i=0;i<list4.size();i++){
		    		GuessBean t4 = (GuessBean) list4.get(i);%>
    <div class="book">
        <a href="item.php?id=<?=$row['title_id']?>">
        <img src="<?=$row['cover']?>">
        </a>
      <span class="book_info">
        <span class="book_name"><%t4.getTitle();%></span> <br>
        <span class="author"><%t4.getAu_name();%></span><br>
        <span class="intro"><%t4.getTitle_introduction();%></span>
      </span>
    </div>
    <%}%>
  </div>

  <div class="foot">
    <span class="contract">

      <span class="about">关于我们</span>
      <span class="link">联系我们</span>
      <span class="join">加入我们</span>
      <span class="author"> 
<pre>
作者:xxxxxxxxxxxxxxxxxxxxx
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