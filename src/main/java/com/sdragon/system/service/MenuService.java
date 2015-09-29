package com.sdragon.system.service;

import com.sdragon.system.pojo.Menu;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface MenuService {
    List<Menu> list(String text);
}
