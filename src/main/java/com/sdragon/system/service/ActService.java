package com.sdragon.system.service;

import com.sdragon.system.pojo.Act;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface ActService {
    List<Act> list(String rolename, String text);
}
