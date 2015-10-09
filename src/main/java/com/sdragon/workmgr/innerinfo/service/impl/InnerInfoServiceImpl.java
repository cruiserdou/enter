package com.sdragon.workmgr.innerinfo.service.impl;

import com.sdragon.workmgr.innerinfo.dao.InnerInfoDao;
import com.sdragon.workmgr.innerinfo.pojo.InnerInfo;
import com.sdragon.workmgr.innerinfo.service.InnerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dou on 15-9-3.
 */
@Service
public class InnerInfoServiceImpl implements InnerInfoService {
    @Autowired private InnerInfoDao innerInfoDao;
    @Override
    public List<InnerInfo> list(String stat, String user_name){
        return innerInfoDao.list(stat,user_name);
    }

    @Override
    public void delete(Integer id){
        innerInfoDao.delete(id);
    }
}
