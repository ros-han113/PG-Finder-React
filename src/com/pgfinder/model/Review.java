package com.pgfinder.model;

import java.util.Date;

public class Review {
    private int id;
    private int pgId;
    private int userId;
    private String userName;
    private double rating;
    private String comment;
    private Date createdAt;
    private boolean verified;
    
    public Review() {}
    
    public Review(int id, int pgId, int userId, String userName, double rating, String comment) {
        this.id = id;
        this.pgId = pgId;
        this.userId = userId;
        this.userName = userName;
        this.rating = rating;
        this.comment = comment;
        this.createdAt = new Date();
        this.verified = false;
    }
    
    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public int getPgId() { return pgId; }
    public void setPgId(int pgId) { this.pgId = pgId; }
    
    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }
    
    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }
    
    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }
    
    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }
    
    public Date getCreatedAt() { return createdAt; }
    public void setCreatedAt(Date createdAt) { this.createdAt = createdAt; }
    
    public boolean isVerified() { return verified; }
    public void setVerified(boolean verified) { this.verified = verified; }
}
