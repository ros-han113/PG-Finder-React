package com.pgfinder.servlet;

import com.pgfinder.dao.PGDao;
import com.pgfinder.model.PG;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/pg/details")
public class PGDetailsServlet extends HttpServlet {
    
    private PGDao pgDao = new PGDao();
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String idStr = request.getParameter("id");
        if (idStr != null) {
            int id = Integer.parseInt(idStr);
            PG pg = pgDao.getPGById(id);
            request.setAttribute("pg", pg);
        }
        
        request.getRequestDispatcher("/pages/public/pg-details.jsp").forward(request, response);
    }
}
