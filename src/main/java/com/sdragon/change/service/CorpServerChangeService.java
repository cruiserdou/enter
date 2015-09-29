package com.sdragon.change.service;

import com.sdragon.change.pojo.CorpRetrChange;
import com.sdragon.change.pojo.CorpServerChange;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpServerChangeService {
    List<CorpServerChange> list(Integer corp_id);

}
