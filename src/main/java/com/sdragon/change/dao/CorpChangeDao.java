package com.sdragon.change.dao;

import com.sdragon.change.pojo.CorpChange;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by dou on 15-9-3.
 */
@Repository
public interface CorpChangeDao {
    @SelectProvider(type = CorpChangeDaoEmberSql.class, method = "listCorpChange")
    List<CorpChange> list(
            @Param(value = "corp_id") Integer corp_id
    );

    class CorpChangeDaoEmberSql {
        public String listCorpChange(Map<String, Object> para) {
            Integer i_corp_id = 0;

            if (0 != Integer.parseInt(para.get("nos").toString()) && null != para.get("nos").toString())
                i_corp_id= Integer.parseInt(para.get("nos").toString());

            return  "select id, changer_id,changer_dt,field,field_name,c_before,c_after from (" +
                    "select id, changer_id,changer_dt,field,field_name,c_before,c_after from work.tb_corp_change   where corp_id=" +i_corp_id+
                    "union all" +
                    "select  id, changer_id,changer_dt,field,field_name,c_before,c_after  from work.tb_corp_contact_change   where cont_corp_id=" +i_corp_id+
                    " as temp where c_before!=''    ORDER BY  ID DESC ";

        }
    }
}
