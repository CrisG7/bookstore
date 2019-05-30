package com.Dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.Bean.CommentBean;
import com.Bean.OrderBean;

public class Sql {
	public List getCommentInfo() throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="select comment_id,titles.title_id,cover,username,head_pic,comment_date,content,likes from comment,user,titles where comment.user_id=user.user_id and comment.title_id=titles.title_id and checks='F' order by comment_date desc";
		List list=(List)runner.query(sql, new BeanListHandler(CommentBean.class));
		return list;
	}
	public boolean commentcheckpass(String cid) throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="update comment set checks='T' where comment_id=?";
		int ins=runner.update(sql,new Object[]{cid});
		if(ins>0)return true;
		return false;
	}
	public boolean delcomment(String cid) throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="delete from comment where comment_id=?";
		int ins=runner.update(sql,new Object[]{cid});
		if(ins>0)return true;
		return false;
	}
	public List getOrderInfo() throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="select order_id,order_time,cover,title,orders.price,num from orders,titles where orders.title_id=titles.title_id and checks='F' GROUP BY order_id";
		List list=(List)runner.query(sql, new BeanListHandler(OrderBean.class));
		return list;
	}
	public boolean orderpass(String oid) throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="update orders set checks='T' where order_id=?";
		int ins=runner.update(sql,new Object[]{oid});
		if(ins>0)return true;
		return false;
	}
}
