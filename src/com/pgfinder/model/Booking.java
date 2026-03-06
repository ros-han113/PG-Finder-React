package com.pgfinder.model;

import java.util.Date;

public class Booking {
    private int id;
    private int pgId;
    private int userId;
    private String pgName;
    private String location;
    private String roomType;
    private double rent;
    private Date checkInDate;
    private int duration; // in months
    private String status; // Pending, Confirmed, Active, Completed, Cancelled
    private Date createdAt;
    
    public Booking() {}
    
    public Booking(int id, int pgId, int userId, String pgName, String location, String roomType, double rent) {
        this.id = id;
        this.pgId = pgId;
        this.userId = userId;
        this.pgName = pgName;
        this.location = location;
        this.roomType = roomType;
        this.rent = rent;
        this.status = "Pending";
        this.createdAt = new Date();
    }
    
    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public int getPgId() { return pgId; }
    public void setPgId(int pgId) { this.pgId = pgId; }
    
    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }
    
    public String getPgName() { return pgName; }
    public void setPgName(String pgName) { this.pgName = pgName; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    
    public String getRoomType() { return roomType; }
    public void setRoomType(String roomType) { this.roomType = roomType; }
    
    public double getRent() { return rent; }
    public void setRent(double rent) { this.rent = rent; }
    
    public Date getCheckInDate() { return checkInDate; }
    public void setCheckInDate(Date checkInDate) { this.checkInDate = checkInDate; }
    
    public int getDuration() { return duration; }
    public void setDuration(int duration) { this.duration = duration; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public Date getCreatedAt() { return createdAt; }
    public void setCreatedAt(Date createdAt) { this.createdAt = createdAt; }
}
