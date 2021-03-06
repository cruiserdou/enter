package com.sdragon.corp.dao;

import com.sdragon.corp.pojo.Corp;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by dou on 15-9-3.
 */
@Repository
public interface CorpDao {
    @SelectProvider(type = CorpDaoEmberSql.class, method = "listCorp")
    List<Corp> list(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode,
            @Param(value = "start") String start,
            @Param(value = "limit") String limit
    );

    @SelectProvider(type = CorpDaoEmberSql.class, method = "countCorp")
    int getCorpCount(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode,
            @Param(value = "start") String start,
            @Param(value = "limit") String limit
    );

    class CorpDaoEmberSql {
        public String listCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            return "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE 1 = 1  " +
                    where +
                    " limit " + para.get("limit").toString() + " offset " + para.get("start").toString();
        }

        public String countCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            return " SELECT count(id) " +
                    " FROM work.tb_corp " +
                    " WHERE 1 = 1  " +
                    where;
        }
    }

    @SelectProvider(type = CorpGovDaoEmberSql.class, method = "listGovCorp")
    List<Corp> listGov(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode
    );

    class CorpGovDaoEmberSql {
        public String listGovCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";
            return  "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE type_govermt=TRUE " + where;
        }
    }

    @SelectProvider(type = CorpInvDaoEmberSql.class, method = "listInvCorp")
    List<Corp> listInv(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode
    );

    class CorpInvDaoEmberSql {
        public String listInvCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";
            return  "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE type_investors=TRUE " + where;
        }
    }

    @SelectProvider(type = CorpRefiDaoEmberSql.class, method = "listRefiCorp")
    List<Corp> listRefi(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode
    );

    class CorpRefiDaoEmberSql {
        public String listRefiCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";
            return  "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE demand_rz=TRUE " + where;
        }
    }


    @SelectProvider(type = CorpRehrDaoEmberSql.class, method = "listRehrCorp")
    List<Corp> listRehr(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode
    );

    class CorpRehrDaoEmberSql {
        public String listRehrCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";


            return   "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    "     where corp.demand_rl=TRUE " + where;
        }
    }


    @SelectProvider(type = CorpRetrDaoEmberSql.class, method = "listRetrCorp")
    List<Corp> listRetr(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode
    );

    class CorpRetrDaoEmberSql {
        public String listRetrCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";
            return  "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE demand_px=TRUE " + where;
        }
    }

    @SelectProvider(type = CorpServerDaoEmberSql.class, method = "listServerCorp")
    List<Corp> listServer(
            @Param(value = "name") String name,
            @Param(value = "nos") String nos,
            @Param(value = "buslicno") String buslicno,
            @Param(value = "listcode") String listcode
    );

    class CorpServerDaoEmberSql {
        public String listServerCorp(Map<String, Object> para) {
            String where = "";
            if (null != para.get("name").toString() && 0 != para.get("name").toString().length())
                where += " and name like '%" + para.get("name").toString() + "%' ";
            if (null != para.get("nos").toString() && 0 != para.get("nos").toString().length())
                where += " and nos like '%" + para.get("nos").toString() + "%' ";
            if (null != para.get("buslicno").toString() && 0 != para.get("buslicno").toString().length())
                where += " and buslicno like '%" + para.get("buslicno").toString() + "%' ";
            if (null != para.get("listcode").toString() && 0 != para.get("listcode").toString().length())
                where += " and listcode like '%" + para.get("listcode").toString() + "%' ";

            where += " ;";
            return  "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     left outer join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "      left outer join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    " WHERE type_server=TRUE " + where;
        }
    }

    @Delete(" BEGIN;" +

            " delete from work.tb_corp where id  = #{id};" +

            " delete from work.tb_corp_contact where cont_corp_id = #{id};" +

            " delete from work.tb_corp_finance where fin_corp_id = #{id};" +

            " delete from work.tb_corp_government where gov_corp_id = #{id};" +

            " delete from work.tb_corp_investors where inv_corp_id = #{id};" +

            " delete from work.tb_corp_maintain where mai_corp_id = #{id};" +

            " delete from work.tb_corp_refinancing where refi_corp_id = #{id};" +

            " delete from work.tb_corp_rehr where rehr_corp_id = #{id};" +

            " delete from work.tb_corp_retrain where retra_corp_id = #{id};" +

            " delete from work.tb_corp_service where srv_corp_id = #{id};" +

            " delete from work.tb_corp_shareholder where gd_corp_id = #{id};" +

            " COMMIT;")
    void delete(@Param(value = "id") Integer id);



}
