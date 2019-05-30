package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Dao.Sql;

public class checkcomment_servlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException{
		String checks = request.getParameter("checks");
		String delete = request.getParameter("delete");
		String comment_id = request.getParameter("comment_id");
		Sql sql=new Sql();
		if(checks !=null){
			try {
				sql.commentcheckpass(comment_id);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if(delete !=null){
			try {
				sql.delcomment(comment_id);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
//		request.getRequestDispatcher("admin/checkcomment.jsp").forward(request,response);
		response.sendRedirect("admin/checkcomment.jsp");
	}

}
