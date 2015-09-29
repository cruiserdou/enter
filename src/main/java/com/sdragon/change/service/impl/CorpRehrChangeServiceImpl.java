package com.sdragon.change.service.impl;

import com.sdragon.change.dao.CorpRehrChangeDao;
import com.sdragon.change.pojo.CorpRehrChange;
import com.sdragon.change.service.CorpRehrChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpRehrChangeServiceImpl implements CorpRehrChangeService {
    @Autowired
    private CorpRehrChangeDao corpRehrChangeDao;

    @Override
    public List<CorpRehrChange> list(Integer corp_id){
        return corpRehrChangeDao.list(corp_id);
    }

}
