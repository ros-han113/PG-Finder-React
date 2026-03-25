package com.pgfinder.dao;

import com.pgfinder.model.User;
import java.util.ArrayList;
import java.util.List;

// Enhanced user DAO with authentication - Day 13public class UserDao {
    
    private static List<User> users = new ArrayList<>();
    
    public User getUserByEmail(String email) {
        return users.stream()
                .filter(u -> u.getEmail().equals(email))
                .findFirst()
                .orElse(null);
    }
    
    public User getUserById(int id) {
        return users.stream()
                .filter(u -> u.getId() == id)
                .findFirst()
                .orElse(null);
    }
    
    public boolean addUser(User user) {
        users.add(user);
        return true;
    }
    
    public boolean updateUser(User user) {
        User existingUser = getUserById(user.getId());
        if (existingUser != null) {
            users.remove(existingUser);
            users.add(user);
            return true;
        }
        return false;
    }
    
    public boolean deleteUser(int id) {
        return users.removeIf(u -> u.getId() == id);
    }
    
    public List<User> getAllUsers() {
        return new ArrayList<>(users);
    }
    
    public boolean authenticate(String email, String password) {
        User user = getUserByEmail(email);
        return user != null && user.getPassword().equals(password);
    }
}
