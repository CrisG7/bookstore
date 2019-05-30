package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Dao.Sql;

public class checkorder_servlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException{
		String order_id = request.getParameter("order_id");
		System.out.println(order_id);
		Sql sql=new Sql();
		try {
			sql.orderpass(order_id);
		} catch (SQLException e) {
				// TODO Auto-generated catch block
			e.printStackTrace();
		}
		response.sendRedirect("admin/checkorder.jsp");
	}

}
