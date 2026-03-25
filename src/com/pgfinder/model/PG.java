package com.pgfinder.model;

// Enhanced PG model with amenities - Day 13
public class PG {
    private int id;
    private String name;
    private String location;
    private String city;
    private int rent;
    private int deposit;
    private double rating;
    private int reviews;
    private String image;
    private String[] images;
    private String[] amenities;
    private String sharingType;
    private String gender;
    private int availableRooms;
    private boolean verified;
    private String ownerName;
    private String ownerPhone;
    private String ownerEmail;
    private String description;
    private String[] rules;
    
    public PG() {}
    
    public PG(int id, String name, String location, int rent, double rating, String sharingType, boolean verified) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.rent = rent;
        this.rating = rating;
        this.sharingType = sharingType;
        this.verified = verified;
    }
    
    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    
    public int getRent() { return rent; }
    public void setRent(int rent) { this.rent = rent; }
    
    public int getDeposit() { return deposit; }
    public void setDeposit(int deposit) { this.deposit = deposit; }
    
    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }
    
    public int getReviews() { return reviews; }
    public void setReviews(int reviews) { this.reviews = reviews; }
    
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
    
    public String[] getImages() { return images; }
    public void setImages(String[] images) { this.images = images; }
    
    public String[] getAmenities() { return amenities; }
    public void setAmenities(String[] amenities) { this.amenities = amenities; }
    
    public String getSharingType() { return sharingType; }
    public void setSharingType(String sharingType) { this.sharingType = sharingType; }
    
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    
    public int getAvailableRooms() { return availableRooms; }
    public void setAvailableRooms(int availableRooms) { this.availableRooms = availableRooms; }
    
    public boolean isVerified() { return verified; }
    public void setVerified(boolean verified) { this.verified = verified; }
    
    public String getOwnerName() { return ownerName; }
    public void setOwnerName(String ownerName) { this.ownerName = ownerName; }
    
    public String getOwnerPhone() { return ownerPhone; }
    public void setOwnerPhone(String ownerPhone) { this.ownerPhone = ownerPhone; }
    
    public String getOwnerEmail() { return ownerEmail; }
    public void setOwnerEmail(String ownerEmail) { this.ownerEmail = ownerEmail; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String[] getRules() { return rules; }
    public void setRules(String[] rules) { this.rules = rules; }
}
