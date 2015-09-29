package com.sdragon.change.controller;

import com.sdragon.change.pojo.CorpChange;
import com.sdragon.change.pojo.CorpGovChange;
import com.sdragon.change.service.CorpChangeService;
import com.sdragon.change.service.CorpGovChangeService;
import common.util.DataShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@RestController
@RequestMapping("/corpgovchangelist")
public class CorpGovChangeController {
    @Autowired
    private CorpGovChangeService corpGovService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    DataShop listCorp(
            @RequestParam(value = "corp_id", required = false, defaultValue = "") Integer corp_id
    ) throws Exception {
        DataShop dataShop = new DataShop();
        List list = corpGovService.list(corp_id);
        dataShop.setList(list);
        dataShop.setSuccess(true);
        return dataShop;
    }
}
