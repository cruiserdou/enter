package com.sdragon.change.service;

import com.sdragon.change.pojo.CorpChange;
import com.sdragon.change.pojo.CorpInvChange;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpInvChangeService {
    List<CorpInvChange> list(Integer corp_id);

}
