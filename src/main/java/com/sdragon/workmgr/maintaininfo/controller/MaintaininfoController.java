package com.sdragon.workmgr.maintaininfo.controller;

import com.sdragon.workmgr.maintaininfo.service.MaintaininfoService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
//@RequestMapping("/maintaininfolist")
public class MaintaininfoController {
    @Autowired
    private MaintaininfoService maintaininfoService;

    @RequestMapping(value = "/maintaininfolist",method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listInnerInfo(
            @RequestParam(value = "corp_name", required = false, defaultValue = "") String corp_name
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = maintaininfoService.list(corp_name);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

    @RequestMapping(value = "/deletemaintaininfo", method = RequestMethod.POST)
    public String delete(
            @RequestParam("mi_id") Integer mi_id
    )throws Exception{
        maintaininfoService.delete(mi_id);
        return "success";
    }

 }
