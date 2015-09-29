package com.sdragon.system.service.impl;

import com.sdragon.system.dao.DictsDao;
import com.sdragon.system.pojo.Dicts;
import com.sdragon.system.service.DictsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@Service
public class DictsServiceImpl implements DictsService {
    @Autowired
    private DictsDao dictsDao;

    @Override
    public List<Dicts> list(String fieldnm){
        return dictsDao.list(fieldnm);
    }
}
