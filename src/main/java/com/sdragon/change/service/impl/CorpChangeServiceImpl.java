package com.sdragon.change.service.impl;

import com.sdragon.change.dao.CorpChangeDao;
import com.sdragon.change.pojo.CorpChange;
import com.sdragon.change.service.CorpChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpChangeServiceImpl implements CorpChangeService {
    @Autowired
    private CorpChangeDao corpChangeDao;

    @Override
    public List<CorpChange> list(Integer corp_id){
        return corpChangeDao.list(corp_id);
    }

}
