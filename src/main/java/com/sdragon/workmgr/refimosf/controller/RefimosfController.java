package com.sdragon.workmgr.refimosf.controller;

import com.sdragon.workmgr.refimosf.service.RefimosfService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
@RequestMapping("/refimosflist")
public class RefimosfController {
    @Autowired
    private RefimosfService refimosfService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listInnerInfo(
            @RequestParam(value = "corp_name", required = false, defaultValue = "") String corp_name
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = refimosfService.list(corp_name);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }

 }
