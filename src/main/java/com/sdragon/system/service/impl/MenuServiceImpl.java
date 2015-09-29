package com.sdragon.system.service.impl;

import com.sdragon.system.dao.MenuDao;
import com.sdragon.system.pojo.Menu;
import com.sdragon.system.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xwq on 15/9/2.
 */
@Service
public class MenuServiceImpl implements MenuService {
    @Autowired
    private MenuDao menuDao;
    @Override
    public List<Menu> list(String text){
        return menuDao.list(text);
    }
}
