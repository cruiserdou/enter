package com.sdragon.system.dao;

import com.sdragon.system.pojo.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.jdbc.SQL;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface UserDao {

    @SelectProvider(type = UsersDaoEmberSql.class, method = "listUsersInfo")
    List<User> list(
            @Param(value = "name") String name
    );

    class UsersDaoEmberSql {
        public String listUsersInfo(Map<String, Object> para) {

            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";


            where += " ;";

            return " SELECT *  " +
                    "  FROM work.users " +
                    " WHERE 1 = 1  " + where;
        }
    }



    @SelectProvider(type = UserVldEmberSql.class, method = "validUser")
    int validUser(String account, String password);

    class UserVldEmberSql {
        public String validUser() {

            return " SELECT id, account, password, sex, phone, address, deptid, remark, name, " +
                    " nos, img, lastip, lastvisit " +
                    " FROM work.users ";
        }
    }

    @Delete(" Delete FROM work.users  where id = #{id}")
    void delete(@Param(value = "id") Integer id);
}

