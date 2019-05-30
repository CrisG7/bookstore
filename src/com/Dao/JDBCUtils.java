package com.Dao;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import com.mchange.v2.c3p0.ComboPooledDataSource;

public class JDBCUtils {
	// 创建一个ThreadLocal 对象，以当前线程作为key
	private static ThreadLocal<Connection> threadLocal = 
             new ThreadLocal<Connection>();
	// 从c3p0-config.xml配置文件中读取默认的数据库配置，生成c3p0数据源
	private static DataSource ds = new ComboPooledDataSource("Booksyi");
	// 返回数据源对象
	public static DataSource getDataSource() {
		return ds;
	}
	// 获取c3p0数据库连接池中的连接对象
	public static Connection getConnection() throws SQLException {
		Connection conn = threadLocal.get();
		if (conn == null) {
			conn = ds.getConnection();
			threadLocal.set(conn);
		}
		return conn;
	}
	// 开启事务
	public static void startTransaction() {
		try {
			// 获得链接
			Connection conn = getConnection();
			// 开启事务
			conn.setAutoCommit(false);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	// 提交事务
	public static void commit() {
		try {
			// 获得链接
			Connection conn = threadLocal.get();
			// 提交事务
			if (conn != null)
				conn.commit();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	// 回滚事务
	public static void rollback() {
		try {
			// 获得链接
			Connection conn = threadLocal.get();
			// 回滚事务
			if (conn != null)
				conn.rollback();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	// 关闭数据库连接，释放资源
	public static void close() {
		// 获得链接
		Connection conn = threadLocal.get();
		// 关闭事务
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				// 从集合中移除当前绑定的连接
				threadLocal.remove();
				conn = null;
			}
		}
	}
}
