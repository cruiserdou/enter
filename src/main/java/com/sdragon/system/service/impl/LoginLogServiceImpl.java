package com.sdragon.system.service.impl;

import com.sdragon.system.dao.LoginLogDao;
import com.sdragon.system.pojo.LoginLog;
import com.sdragon.system.service.LoginLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@Service
public class LoginLogServiceImpl implements LoginLogService {
    @Autowired
    private LoginLogDao loginLogDao;

    @Override
    public List<LoginLog> list(){
        return loginLogDao.list();
    }
}
