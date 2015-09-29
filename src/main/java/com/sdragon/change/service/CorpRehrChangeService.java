package com.sdragon.change.service;

import com.sdragon.change.pojo.CorpRefiChange;
import com.sdragon.change.pojo.CorpRehrChange;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpRehrChangeService {
    List<CorpRehrChange> list(Integer corp_id);

}
