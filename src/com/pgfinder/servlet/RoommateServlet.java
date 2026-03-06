package com.pgfinder.servlet;

import com.pgfinder.dao.RoommateDao;
import com.pgfinder.model.Roommate;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/roommate/*")
public class RoommateServlet extends HttpServlet {
    
    private RoommateDao roommateDao = new RoommateDao();
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String location = request.getParameter("location");
        String gender = request.getParameter("gender");
        String budget = request.getParameter("budget");
        
        List<Roommate> roommates;
        if (location != null || gender != null) {
            roommates = roommateDao.searchRoommates(location, gender, budget);
        } else {
            roommates = roommateDao.getAllRoommates();
        }
        
        request.setAttribute("roommates", roommates);
        request.getRequestDispatcher("/pages/tenant/roommate-finder.jsp").forward(request, response);
    }
}
