package com.pgfinder.servlet;

import com.pgfinder.dao.PGDao;
import com.pgfinder.dao.UserDao;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/admin/*")
public class AdminServlet extends HttpServlet {
    
    private PGDao pgDao = new PGDao();
    private UserDao userDao = new UserDao();
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String action = request.getPathInfo();
        
        if ("/approve-pg".equals(action)) {
            approvePG(request, response);
        } else if ("/suspend-user".equals(action)) {
            suspendUser(request, response);
        }
    }
    
    private void approvePG(HttpServletRequest request, HttpServletResponse response) 
            throws IOException {
        int pgId = Integer.parseInt(request.getParameter("pgId"));
        // Logic to approve PG
        response.sendRedirect(request.getContextPath() + "/pages/admin/approvals.jsp");
    }
    
    private void suspendUser(HttpServletRequest request, HttpServletResponse response) 
            throws IOException {
        int userId = Integer.parseInt(request.getParameter("userId"));
        // Logic to suspend user
        response.sendRedirect(request.getContextPath() + "/pages/admin/users.jsp");
    }
}
