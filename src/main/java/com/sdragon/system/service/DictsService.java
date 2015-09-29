package com.sdragon.system.service;

import com.sdragon.system.pojo.Dicts;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface DictsService {
    List<Dicts> list(String fieldnm);
}
