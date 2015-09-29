package com.sdragon.change.service;

import com.sdragon.change.pojo.CorpChange;
import com.sdragon.change.pojo.CorpRefiChange;

import java.util.List;

/**
 * Created by zhm_zheng on 15/9/20.
 */
public interface CorpRefiChangeService {
    List<CorpRefiChange> list(Integer corp_id);

}
