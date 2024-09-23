package com.example.demo.Service;

import com.example.demo.Model.LoginModel;
import com.example.demo.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public LoginModel saveUser(LoginModel user) {
        return loginRepository.save(user);
    }
}
