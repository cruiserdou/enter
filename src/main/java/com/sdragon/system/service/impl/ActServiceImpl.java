package com.sdragon.system.service.impl;

import com.sdragon.system.dao.ActDao;
import com.sdragon.system.pojo.Act;
import com.sdragon.system.service.ActService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-2.
 */
@Service
public class ActServiceImpl implements ActService {
    @Autowired
    private ActDao actDao;

    @Override
    public List<Act> list(String rolename, String text){
        return actDao.list(rolename,text);
    }
}
