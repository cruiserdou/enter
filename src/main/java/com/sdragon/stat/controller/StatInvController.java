package com.sdragon.stat.controller;

import com.sdragon.stat.service.StatService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/statinvlist")
public class StatInvController {
    @Autowired
    private StatService statService;

    @RequestMapping(method = RequestMethod.GET)

    public
    @ResponseBody
    DataShop listInv(){
        DataShop dataShop = new DataShop();
        List list = statService.listInv();
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

 }
