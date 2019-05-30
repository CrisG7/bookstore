<%@page import="com.Bean.CommentBean"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page language="java" import="com.Dao.Sql"%>
<html>
  <head>
    
    <title>评论审核</title>
    <link rel="stylesheet" type="text/css" href="../css/index.css">
    <style type="text/css">
    .comment_box{
        padding: 0px 100px;;
    }
    .hot_title,.hot_title > .title{
        width: 100%;
    }
    .comment .content{
        width: 950px;;
    }
    .sbt{
        float: right;
    }
    .checks,.delete{
        width: 100px;
        height: 30px;
        margin: 10px;;
    }
    .delete{
        color: white;
        background:#d50624;
    }
    #changepage{
        width: 60px;
        height: 36px;
        display: inline-block;
        border: 1px #ddd solid;
        color:blue;
        text-align: center;
        line-height: 36px;
        background-color: white;
    }
    #choose{
        border: 0px;
        color:white;z-index: 1;
        background-color: #317ef3 ;
    }
    .pages{
        width: 36px;
        height: 36px;
        display: inline-block;
        border: 1px #ddd solid;
        color:blue;
        text-align: center;
        line-height: 36px;
        background-color: white;
    }
    .bt:hover{
        background: #d8d8d8;
        color:#317ef3;
    }

    .pagebox{
        text-align: center;
        width: 70%;
        height: 50px;
        display: inline-block;
        margin-left: 40px;
        margin-top: 10px;
    }
</style>
  </head>
  <body>
    <div class="comment_box">
    <div class="hot_title">
        <span class="title">评论审核</span>
    </div>
    <%
    	Sql dao=new Sql();
    	List list=(List)dao.getCommentInfo();
    	for(int i=0;i<list.size();i++){
    		CommentBean t = (CommentBean) list.get(i);
     %>
    <form method="post" action="../checkcomment_servlet">
    
	    <div class="comment">
	        <a href="item.php?id=<%=t.getTitle_id()%>">
	            <img src="../<%=t.getCover()%>" class="bk">
	        </a>
	      <span class="user_comment">
	        <img src="../<%=t.getHead_pic()%>" class="hc">
	        <span class="name"><%=t.getUsername()%></span>
	        <span class="time"><%=t.getComment_date()%></span>
	        <br>
	        <span class="content"><%=t.getContent()%></span>
	      </span>
	        <input type="text" name="comment_id" value="<%=t.getComment_id()%>" style="display: none">
	        <span class="sbt">
	            <input type="submit" name="checks" class="checks" value="通过"><br>
	            <input type="submit" name="delete" class="delete" value="删除">
	        </span>
	    </div>
      </form>
    	<% } %>
	</div>
  </body>
</html>
