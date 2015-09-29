package com.sdragon.change.service;

import com.sdragon.change.pojo.CorpConChange;

import java.util.List;


public interface CorpConChangeService {
    List<CorpConChange> list(Integer corp_id);

}
