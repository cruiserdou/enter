package com.sdragon.system.service;

import com.sdragon.system.pojo.Role;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface RoleService {
    List<Role> list(String rolename);

    public void delete(Integer id);
}
