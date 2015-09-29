package com.sdragon.change.dao;

import com.sdragon.change.pojo.CorpConChange;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by dou on 15-9-3.
 */
@Repository
public interface CorpConChangeDao {
    @SelectProvider(type = CorpConChangeDaoEmberSql.class, method = "listCorpConChange")
    List<CorpConChange> list(
            @Param(value = "corp_id") Integer corp_id
    );

    class CorpConChangeDaoEmberSql {
        public String listCorpConChange(Map<String, Object> para) {
            Integer i_corp_id = 0;

            if (0 != Integer.parseInt(para.get("corp_id").toString()) && null != para.get("corp_id").toString())
                i_corp_id= Integer.parseInt(para.get("corp_id").toString());

            return  "select * from work.tb_corp_contact_change   where cont_corp_id =" +i_corp_id+" and c_before!=''    ORDER BY  ID DESC ";

        }
    }
}
