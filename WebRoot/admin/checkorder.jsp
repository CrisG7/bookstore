<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page language="java" import="com.Dao.Sql"%>
<%@page import="com.Bean.OrderBean"%>
<html>
  <head>
    <title>订单审核</title>
  </head>
  <link href="../css/checkorder.css" rel="stylesheet" style="text/css"/>
  <body>
    <div id="orders">
    <form action="../checkorder_servlet" method="POST">
        <div class="cart">  <!-- 购物车 -->
            <div class="cart-header">
                <div class="products">商品</div>
                <div class="prices">单价</div>
                <div class="nums">数量</div>
                <div class="pay">实付款</div>
                <div class="status">交易状况</div>
                <div class="ctrl">操作</div>
            </div>
            <%Sql dao=new Sql();
		    	List list=(List)dao.getOrderInfo();
		    	for(int i=0;i<list.size();i++){
		    		OrderBean t = (OrderBean) list.get(i);
		     %>
            <form method="post">
                <div class="item">
                    <div class="order_title">
                        <div class="order_time"><%=t.getOrder_time()%></div>
                        <div class="order_code">订单号:<%=t.getOrder_id()%></div>
                        <input type="text" name="order_id" style="display: none" value="<%=t.getOrder_id()%>">
                    </div><br>
                    <%int ins=-1;
                        %>

                        <div class="oit">
                            <div class="image"><img src="../<%=t.getCover()%>" alt=""></div>
                            <div class="product"><%=t.getTitle()%></div>
                            <div class="prices"><%=t.getPrice()%></div>
                            <div class="nums"><%=t.getNum()%></div>
                            <div class="pay"><%=t.getPrice()%></div>
                            <div class="status">
                                <span>等待审核</span>
                            </div>
                            <input type="submit" name="sub" value="审核">
                        </div>

                        <%if(ins-->1)out.print("<hr>") ;%>
                </div>
            </form>
            <%} %>


	        </div>
	    </form>
	</div>
  </body>
</html>
