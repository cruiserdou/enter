package com.sdragon.stat.service.impl;

import com.sdragon.stat.dao.StatDao;
import com.sdragon.stat.pojo.StatInfo;
import com.sdragon.stat.service.StatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StatServiceImpl implements StatService {
    @Autowired private StatDao statDao;
    @Override
    public List<StatInfo> list(){
        return statDao.list();
    }

    public List<StatInfo> listAll(){
        return statDao.listAll();
    }

    public List<StatInfo> listGov(){
        return statDao.listGov();
    }

    public List<StatInfo> listInv(){
        return statDao.listInv();
    }

    public List<StatInfo> listRefi(){
        return statDao.listRefi();
    }

    public List<StatInfo> listRehr(){
        return statDao.listRehr();
    }

    public List<StatInfo> listRetr(){
        return statDao.listRetr();
    }

    public List<StatInfo> listServer(){
        return statDao.listServer();
    }
}
