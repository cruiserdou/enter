package com.sdragon.workmgr.maintaininfo.service.impl;

import com.sdragon.workmgr.maintaininfo.dao.MaintaininfoDao;
import com.sdragon.workmgr.maintaininfo.pojo.Maintaininfo;
import com.sdragon.workmgr.maintaininfo.service.MaintaininfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class MaintaininfoServiceImpl implements MaintaininfoService {
    @Autowired private MaintaininfoDao maintaininfoDao;
    @Override
    public List<Maintaininfo> list(String corp_name){
        return maintaininfoDao.list(corp_name);
    }

    @Override
    public void delete(Integer mi_id){
        maintaininfoDao.delete(mi_id);
    }
}
