package com.example.demo.Controller;

import com.example.demo.Model.LoginModel;
import com.example.demo.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/add")
    public LoginModel addUser(@RequestBody LoginModel user) {
        return loginService.saveUser(user);
    }
}
