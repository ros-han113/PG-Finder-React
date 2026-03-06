package com.pgfinder.servlet;

import com.pgfinder.dao.PGDao;
import com.pgfinder.model.PG;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/pg/list")
public class PGListingServlet extends HttpServlet {
    
    private PGDao pgDao = new PGDao();
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String city = request.getParameter("city");
        String gender = request.getParameter("gender");
        String minRentStr = request.getParameter("minRent");
        String maxRentStr = request.getParameter("maxRent");
        
        double minRent = minRentStr != null ? Double.parseDouble(minRentStr) : 0;
        double maxRent = maxRentStr != null ? Double.parseDouble(maxRentStr) : Double.MAX_VALUE;
        
        List<PG> pgList;
        if (city != null || gender != null) {
            pgList = pgDao.searchPGs(city, gender, minRent, maxRent);
        } else {
            pgList = pgDao.getAllPGs();
        }
        
        request.setAttribute("pgList", pgList);
        request.getRequestDispatcher("/pages/public/pg-listing.jsp").forward(request, response);
    }
}
