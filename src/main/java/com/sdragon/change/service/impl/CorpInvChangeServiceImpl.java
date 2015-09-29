package com.sdragon.change.service.impl;

import com.sdragon.change.dao.CorpChangeDao;
import com.sdragon.change.dao.CorpInvChangeDao;
import com.sdragon.change.pojo.CorpChange;
import com.sdragon.change.pojo.CorpInvChange;
import com.sdragon.change.service.CorpChangeService;
import com.sdragon.change.service.CorpInvChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpInvChangeServiceImpl implements CorpInvChangeService {
    @Autowired
    private CorpInvChangeDao corpInvChangeDao;

    @Override
    public List<CorpInvChange> list(Integer corp_id){
        return corpInvChangeDao.list(corp_id);
    }

}
