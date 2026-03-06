package com.pgfinder.model;

public class Roommate {
    private int id;
    private String name;
    private int age;
    private String gender;
    private String image;
    private String occupation;
    private String company;
    private String location;
    private String budget;
    private String[] lifestyle;
    private int compatibility;
    private boolean verified;
    private String bio;
    private String contact;
    private String email;
    
    public Roommate() {}
    
    public Roommate(int id, String name, int age, String occupation, String location, int compatibility, boolean verified) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.location = location;
        this.compatibility = compatibility;
        this.verified = verified;
    }
    
    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
    
    public String getOccupation() { return occupation; }
    public void setOccupation(String occupation) { this.occupation = occupation; }
    
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    
    public String getBudget() { return budget; }
    public void setBudget(String budget) { this.budget = budget; }
    
    public String[] getLifestyle() { return lifestyle; }
    public void setLifestyle(String[] lifestyle) { this.lifestyle = lifestyle; }
    
    public int getCompatibility() { return compatibility; }
    public void setCompatibility(int compatibility) { this.compatibility = compatibility; }
    
    public boolean isVerified() { return verified; }
    public void setVerified(boolean verified) { this.verified = verified; }
    
    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }
    
    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
