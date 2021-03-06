package com.sdragon.system.dao;

import com.sdragon.system.pojo.Dicts;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.jdbc.SQL;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by xwq on 15/9/2.
 */
@Repository
public interface DictsDao {

    @SelectProvider(type = DictsDaoEmberSql.class, method = "listDictsInfo")
    List<Dicts> list(
            @Param(value = "fieldnm") String fieldnm
    );

    class DictsDaoEmberSql {
        public String listDictsInfo(Map<String, Object> para) {

            String where = "";
            if (null != para.get("fieldnm").toString() && 0 != para.get("fieldnm").toString().length())
                where += " and fieldnm like '%" + para.get("fieldnm").toString() + "%' ";

            where += " ;";

            return " SELECT id, field, fieldnm, fieldval, fieldvaldis, remark " +
                    "  FROM work.dicts " +
                    " WHERE 1 = 1  " + where;
        }
    }

    @Delete(" Delete FROM work.dicts  where id = #{id}")
    void delete(@Param(value = "id") Integer id);


}
