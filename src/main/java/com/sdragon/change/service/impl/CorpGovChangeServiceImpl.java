package com.sdragon.change.service.impl;

import com.sdragon.change.dao.CorpGovChangeDao;
import com.sdragon.change.pojo.CorpChange;
import com.sdragon.change.pojo.CorpGovChange;
import com.sdragon.change.service.CorpChangeService;
import com.sdragon.change.service.CorpGovChangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class CorpGovChangeServiceImpl implements CorpGovChangeService {
    @Autowired
    private CorpGovChangeDao corpGovChangeDao;

    @Override
    public List<CorpGovChange> list(Integer corp_id){
        return corpGovChangeDao.list(corp_id);
    }

}
