package com.sdragon.change.service.impl;

import com.sdragon.change.dao.CorpConChangeDao;
import com.sdragon.change.pojo.CorpChange;
import com.sdragon.change.pojo.CorpConChange;
import com.sdragon.change.service.CorpChangeService;
import com.sdragon.change.service.CorpConChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpConChangeServiceImpl implements CorpConChangeService {
    @Autowired
    private CorpConChangeDao corpConChangeDao;

    @Override
    public List<CorpConChange> list(Integer corp_id){
        return corpConChangeDao.list(corp_id);
    }

}
