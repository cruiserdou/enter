package com.sdragon.change.service;

import com.sdragon.change.pojo.CorpRefiChange;
import com.sdragon.change.pojo.CorpRetrChange;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpRetrChangeService {
    List<CorpRetrChange> list(Integer corp_id);

}
