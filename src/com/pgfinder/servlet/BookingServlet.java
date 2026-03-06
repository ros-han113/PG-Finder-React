package com.pgfinder.servlet;

import com.pgfinder.dao.BookingDao;
import com.pgfinder.model.Booking;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/booking/*")
public class BookingServlet extends HttpServlet {
    
    private BookingDao bookingDao = new BookingDao();
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String action = request.getPathInfo();
        
        if ("/create".equals(action)) {
            createBooking(request, response);
        } else if ("/cancel".equals(action)) {
            cancelBooking(request, response);
        }
    }
    
    private void createBooking(HttpServletRequest request, HttpServletResponse response) 
            throws IOException {
        // Extract booking details from request
        int pgId = Integer.parseInt(request.getParameter("pgId"));
        int userId = Integer.parseInt(request.getParameter("userId"));
        
        Booking booking = new Booking();
        booking.setPgId(pgId);
        booking.setUserId(userId);
        booking.setStatus("Pending");
        
        if (bookingDao.addBooking(booking)) {
            response.sendRedirect(request.getContextPath() + "/pages/tenant/booking-confirmation.jsp");
        } else {
            response.sendRedirect(request.getContextPath() + "/pages/tenant/booking-page.jsp?error=true");
        }
    }
    
    private void cancelBooking(HttpServletRequest request, HttpServletResponse response) 
            throws IOException {
        int bookingId = Integer.parseInt(request.getParameter("id"));
        bookingDao.cancelBooking(bookingId);
        response.sendRedirect(request.getContextPath() + "/pages/tenant/bookings.jsp");
    }
}
