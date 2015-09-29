package com.sdragon.system.controller;

import com.sdragon.system.service.MenuService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@RestController
@RequestMapping("/menulist")
public class MenuController {
    @Autowired
    private MenuService menuService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listMenu(
            @RequestParam(value = "text", required = false, defaultValue = "") String text
    ) throws Exception{
        DataShop dataShop = new DataShop();
        List list = menuService.list(text);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
