package com.sdragon.corp.controller;

import com.sdragon.corp.service.CorpService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
@RequestMapping("/corpretrlist")
public class CorpRetrController {
    @Autowired
    private CorpService corpService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listCorp(
            @RequestParam(value = "name", required = false, defaultValue = "") String name,
            @RequestParam(value = "nos", required = false, defaultValue = "") String nos,
            @RequestParam(value = "buslicno", required = false, defaultValue = "") String buslicno,
            @RequestParam(value = "listcode", required = false, defaultValue = "") String listcode
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = corpService.listRetr(name, nos, buslicno, listcode);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
