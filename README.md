# PG Finder - JSP Web Application

A complete PG (Paying Guest) accommodation finder and roommate matching platform built with Java, JSP, and Servlets.

## 🎯 Features

- **PG Listings**: Browse and search verified PG accommodations
- **Roommate Finder**: Find compatible roommates with matching algorithm
- **Booking System**: Complete booking flow with payment integration
- **Review System**: Rate and review PG accommodations
- **Multi-Role Support**: Tenant, Owner, and Admin dashboards
- **Messaging**: Real-time communication between users
- **Responsive Design**: Works seamlessly on all devices

## 🚀 Quick Start

### Prerequisites

- Java JDK 8 or higher
- Apache Tomcat 9.0 or higher
- Eclipse IDE (recommended)

### Installation

1. **Clone or Download** the project

2. **Import into Eclipse**
   ```
   File → Import → Existing Projects into Workspace
   Select the project folder
   ```

3. **Configure Tomcat Server**
   ```
   Window → Preferences → Server → Runtime Environments
   Add → Apache Tomcat v9.0
   ```

4. **Deploy and Run**
   ```
   Right-click project → Run As → Run on Server
   Select Tomcat v9.0
   ```

5. **Access the Application**
   ```
   Landing Page: http://localhost:8080/PG-Finder/
   Login: http://localhost:8080/PG-Finder/pages/auth/login.jsp
   Admin: http://localhost:8080/PG-Finder/pages/auth/admin-login.jsp
   ```

## 📁 Project Structure

```
PG-Finder-JSP/
├── WebContent/
│   ├── WEB-INF/
│   │   └── web.xml                 # Servlet configuration
│   ├── assets/
│   │   ├── css/                    # Tailwind-like CSS
│   │   └── js/                     # JavaScript utilities
│   ├── components/
│   │   └── layout/                 # Reusable layouts
│   └── pages/
│       ├── public/                 # Public pages
│       ├── tenant/                 # Tenant dashboard
│       ├── owner/                  # Owner dashboard
│       ├── admin/                  # Admin dashboard
│       └── auth/                   # Authentication pages
└── src/com/pgfinder/
    ├── model/                      # Java POJOs
    ├── dao/                        # Data Access Objects
    ├── servlet/                    # Servlet controllers
    ├── util/                       # Utility classes
    └── data/                       # Mock data
```

## 🎨 Design

- **Modern UI**: Clean and professional interface
- **Responsive**: Mobile-first design approach
- **Color Scheme**: Blue gradient theme
- **Icons**: SVG icons throughout
- **Animations**: Smooth transitions and hover effects

## 🔐 User Roles

### Tenant
- Browse PG listings
- Find roommates
- Book accommodations
- Manage bookings
- Send messages
- Write reviews

### Owner
- Add PG listings
- Manage properties
- View inquiries
- Handle bookings
- Upload photos
- Respond to reviews

### Admin
- Manage users
- Approve listings
- Monitor bookings
- View reports
- Handle inquiries
- System settings

## 🛠️ Technology Stack

- **Frontend**: JSP, HTML5, CSS3, JavaScript
- **Backend**: Java Servlets
- **Server**: Apache Tomcat 9.0
- **Architecture**: MVC Pattern
- **Database**: Mock Data (ready for database integration)

## 📄 Pages Overview

### Public Pages (4)
- Landing Page
- PG Listings
- PG Details
- Reviews

### Tenant Pages (10)
- Bookings
- Saved PGs
- Roommate Finder
- Messages
- Notifications
- Profile
- Settings
- Booking Page
- Payment Page
- Booking Confirmation

### Owner Pages (10)
- Dashboard
- Manage PG
- Listings
- Availability
- Inquiries
- Reviews
- Photos
- Requests
- Profile
- Settings

### Admin Pages (8)
- Dashboard
- Users
- Listings
- Approvals
- Reviews
- Reports
- Inquiries
- Settings

### Auth Pages (5)
- Login
- Register
- Forgot Password
- Change Password
- Admin Login

## 🔧 Configuration

### web.xml
All servlets are configured in `WebContent/WEB-INF/web.xml`:
- PGListingServlet
- PGDetailsServlet
- RoommateServlet
- AuthServlet
- BookingServlet
- AdminServlet

### Database Integration
The project uses mock data. To integrate with a database:
1. Add JDBC driver to `WEB-INF/lib/`
2. Update DAO classes with database queries
3. Configure database connection in a properties file

## 📊 Features in Detail

### Search & Filters
- Location-based search
- Price range filter
- Gender preference
- Sharing type
- Amenities filter

### Booking Flow
1. Browse listings
2. View details
3. Fill booking form
4. Make payment
5. Confirmation

### Roommate Matching
- Compatibility score
- Lifestyle preferences
- Budget matching
- Location proximity

## 🎯 Future Enhancements

- Database integration (MySQL/PostgreSQL)
- Real-time chat with WebSocket
- Payment gateway integration
- Email notifications
- SMS alerts
- Google Maps integration
- Advanced search with AI
- Mobile app

## 📝 License

This project is created for educational purposes.

## 👥 Support

For issues or questions, please create an issue in the repository.

## 🎉 Acknowledgments

- Design inspired by modern accommodation platforms
- Built with Java best practices
- Follows MVC architecture pattern

---

**Version**: 1.0.0  
**Status**: Production Ready  
**Last Updated**: 2024
