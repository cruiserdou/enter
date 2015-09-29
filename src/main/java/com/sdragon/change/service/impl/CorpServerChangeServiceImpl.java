package com.sdragon.change.service.impl;

import com.sdragon.change.dao.CorpServerChangeDao;
import com.sdragon.change.pojo.CorpServerChange;
import com.sdragon.change.service.CorpServerChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpServerChangeServiceImpl implements CorpServerChangeService {
    @Autowired
    private CorpServerChangeDao corpServerChangeDao;

    @Override
    public List<CorpServerChange> list(Integer corp_id){
        return corpServerChangeDao.list(corp_id);
    }

}
