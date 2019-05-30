package com.Dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.Bean.CommentBean;
import com.Bean.GuessBean;
import com.Bean.HotsaleBean;
import com.Bean.indexHotBookBean;

public class indexDao {
	public List getHotbook() throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="select title_id,cover,title,price,origin_price from titles order by sale_num desc limit 4";
		List list=(List)runner.query(sql, new BeanListHandler(indexHotBookBean.class));
		return list;
	}
	public List getNewbook() throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="select title_id,cover,title,title_introduction from titles order by pub_date desc LIMIT 3";
		List list=(List)runner.query(sql, new BeanListHandler(indexHotBookBean.class));
		return list;
	}
	public List getDiscountbook() throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="select title_id,cover,title,price,origin_price from titles order by (origin_price-price) desc LIMIT 10";
		List list=(List)runner.query(sql, new BeanListHandler(indexHotBookBean.class));
		return list;
	}
	public List getConmment() throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="select titles.title_id,cover,username,head_pic,comment_date,content,likes from comment,user,titles where comment.user_id=user.user_id and comment.title_id=titles.title_id order by likes desc LIMIT 4";
		List list=(List)runner.query(sql, new BeanListHandler(CommentBean.class));
		return list;
	}
	public List getGuess() throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="select cover,title_id,au_name,title,title_introduction from titles,authors where titles.au_id=authors.au_id ORDER BY RAND() LIMIT 2";
		List list=(List)runner.query(sql, new BeanListHandler(GuessBean.class));
		return list;
	}
	
	public List getHotsale() throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="select title_id,cover,title,price,origin_price,au_name,title_introduction,sale_num from titles,authors where titles.au_id=authors.au_id order by sale_num desc limit 3";
		List list=(List)runner.query(sql, new BeanListHandler(HotsaleBean.class));
		return list;
	}
	public List getHottitle() throws SQLException{
		QueryRunner runner=new QueryRunner(JDBCUtils.getDataSource());
		String sql="select title_id,cover,title,price,origin_price,au_name,title_introduction,sale_num from titles,authors where titles.au_id=authors.au_id order by sale_num desc limit 3,7";
		List list=(List)runner.query(sql, new BeanListHandler(HotsaleBean.class));
		return list;
	}
}
