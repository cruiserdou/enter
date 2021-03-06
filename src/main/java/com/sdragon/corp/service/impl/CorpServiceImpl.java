package com.sdragon.corp.service.impl;

import com.sdragon.corp.dao.CorpDao;
import com.sdragon.corp.pojo.Corp;
import com.sdragon.corp.service.CorpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpServiceImpl implements CorpService {
    @Autowired
    private CorpDao corpDao;

    @Override
    public List<Corp> list(String name, String nos, String buslicno, String listcode, String start, String limit){
        return corpDao.list(name, nos, buslicno, listcode, start, limit);
    }

    public int getCorpCount(String name, String nos, String buslicno, String listcode, String start, String limit){
        return corpDao.getCorpCount(name, nos, buslicno, listcode, start, limit);
    }


    public List<Corp> listGov(String name, String nos, String buslicno, String listcode){
        return corpDao.listGov(name, nos, buslicno, listcode);
    }

    public List<Corp> listInv(String name, String nos, String buslicno, String listcode){
        return corpDao.listInv(name, nos, buslicno, listcode);
    }

    public List<Corp> listRefi(String name, String nos, String buslicno, String listcode){
        return corpDao.listRefi(name, nos, buslicno, listcode);
    }

    public List<Corp> listRehr(String name, String nos, String buslicno, String listcode){
        return corpDao.listRehr(name, nos, buslicno, listcode);
    }

    public List<Corp> listRetr(String name, String nos, String buslicno, String listcode){
        return corpDao.listRetr(name, nos, buslicno, listcode);
    }

    public List<Corp> listServer(String name, String nos, String buslicno, String listcode){ return corpDao.listServer(name, nos, buslicno, listcode);
    }

    @Override
    public void delete(Integer id){
        corpDao.delete(id);
    }
}
