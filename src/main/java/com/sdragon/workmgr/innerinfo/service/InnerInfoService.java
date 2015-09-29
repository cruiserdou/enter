package com.sdragon.workmgr.innerinfo.service;

import com.sdragon.workmgr.innerinfo.pojo.InnerInfo;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface InnerInfoService {
    List<InnerInfo> list(String stat, String user_name);
}
