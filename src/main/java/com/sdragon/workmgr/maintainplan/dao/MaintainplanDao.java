package com.sdragon.workmgr.maintainplan.dao;

import com.sdragon.workmgr.maintainplan.pojo.Maintainplan;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by dou on 15-9-3.
 */
@Repository
public interface MaintainplanDao {
    @SelectProvider(type = MaintainplanDaoEmberSql.class, method = "listMaintainplan")
    List<Maintainplan> list(
            @Param(value = "corp_name") String corp_name
    );

    class MaintainplanDaoEmberSql {
        public String listMaintainplan(Map<String, Object> para) {

            String where = "";
            if (null != para.get("corp_name").toString() && 0 != para.get("corp_name").toString().length())
                where += " and corp.name like '%" + para.get("corp_name").toString() + "%' ";


            where += " ;";
            System.out.println(where);

//            return  "SELECT  corp.name corp_name, mp_id, mp_corp_id, mp_listcode, mp_province, mp_city, mp_county, " +
//                    "  mp_last_date, mp_content, mp_result, mp_hisdesc, mp_remark ,maintain_plan.inputdt,maintain_plan.inputid" +
//                    "  FROM   work.tb_maintain_plan  maintain_plan ,work.tb_corp  corp WHERE corp.id  = maintain_plan.mp_corp_id  " +
//                    "  and mp_id in (select max(mp_id)  from work.tb_maintain_plan   group by mp_corp_id) "+ where;


            return "SELECT corp.name corp_name,mi_id, mi_corp_id, mi_listcode, mi_province, mi_city, mi_county, " +
                    "     mi_mt_date, mi_cust_type, mi_next_date, mi_next_plan, mi_remark  " +
                    "      FROM  work.tb_maintain_info maintain_info ,work.tb_corp  corp   " +
                    "      where   corp.id  = maintain_info.mi_corp_id    and  " +
                    "             mi_id  in (select max(mi_id)  from work.tb_maintain_info   group by mi_corp_id)  "  + where;

        }
    }
}
