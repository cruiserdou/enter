package com.sdragon.workmgr.refiropf.service;

import com.sdragon.workmgr.refiropf.pojo.Refiropf;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface RefiropfService {
    List<Refiropf> list(Integer rop_mos_id);

    public void delete(Integer rop_id);
}
