package com.sdragon.change.service;

import com.sdragon.change.pojo.CorpChange;
import com.sdragon.change.pojo.CorpConChange;
import com.sdragon.change.pojo.CorpGovChange;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpChangeService {
    List<CorpChange> list(Integer corp_id);

}
