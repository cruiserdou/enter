package com.sdragon.system.service.impl;

import com.sdragon.system.dao.RoleDao;
import com.sdragon.system.pojo.Role;
import com.sdragon.system.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleDao roleDao;

    @Override
    public List<Role> list(String rolename){
        return roleDao.list(rolename);
    }
}
