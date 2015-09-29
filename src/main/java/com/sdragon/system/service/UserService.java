package com.sdragon.system.service;

import com.sdragon.system.pojo.User;

import java.util.List;

public interface UserService {
    List<User> list(String name);

//    User getById(long userId);

    boolean validUser(String account, String password);
}