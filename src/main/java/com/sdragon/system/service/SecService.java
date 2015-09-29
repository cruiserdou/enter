package com.sdragon.system.service;

import com.sdragon.system.pojo.Sec;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface SecService {
    List<Sec> list(String rolename, String username);
}
