/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: '企业信息系统',
        loremIpsum: '内容',

        infoQuery: '<div>' +
        '<a class="menu-btn" href="#" id="enter_info_query_a">企业信息查询</a>' +
        '<a class="menu-btn" href="#" id="service_info_query_a">服务机构查询</a>' +
        '<a class="menu-btn" href="#" id="investor_query_a">投资人查询</a>' +
        '<a class="menu-btn" href="#" id="gov_query_a">政府部门信息查询</a>' +
        '</div>' +

        '<div>' +
        '<a class="menu-btn" href="#" id="finservice_query_a">融资需求查询</a>' +
        '<a class="menu-btn" href="#" id="train_query_a">培训需求查询</a>' +
        '<a class="menu-btn" href="#" id="hr_query_a">人力资源需求查询</a>' +
        '</div>',


        infoMgr: '<div class="wrapper-menu-btn">' +
        '<a class="menu-btn" href="#" id="enter_add_a">新增企业入口</a>' +
        '<a class="menu-btn" href="#" id="enter_has_in_a">已入库企业列表</a>' +
        '</div>',

        //'<div>' +
        //'<a class="menu-btn" href="#" id="service_mt_a">服务机构管理</a>' +
        //'<a class="menu-btn" href="#" id="investor_mt_a">投资人管理</a>' +
        //'<a class="menu-btn" href="#" id="gov_mt_a">政府部门信息管理</a>' +
        //'</div>' +
        //
        //'<div>' +
        //'<a class="menu-btn" href="#" id="finservice_mt_a">融资需求管理</a>' +
        //'<a class="menu-btn" href="#" id="train_mt_a">培训需求管理</a>' +
        //'<a class="menu-btn" href="#" id="hr_mt_a">人力资源需求管理</a>' +
        //'</div>',


        statistics: '<div>' +
        '<a class="menu-btn" href="#" id="enter_statis_a">企业信息统计</a>' +
        '<a class="menu-btn" href="#" id="service_statis_a">服务机构统计</a>' +
        '<a class="menu-btn" href="#" id="investor_statis_a">投资人统计</a>' +
        '<a class="menu-btn" href="#" id="gov_statis_a">政府部门统计</a>' +
        '<a class="menu-btn" href="#" id="demand_statis_a">需求统计</a>' +
        '</div>' +

        '<div>' +
        '<a class="menu-btn" href="#" id="finservice_mt_a">融资需求统计</a>' +
        '<a class="menu-btn" href="#" id="train_mt_a">培训需求统计</a>' +
        '<a class="menu-btn" href="#" id="hr_mt_a">人力资源需求统计</a>' +
        '</div>',


        workMgr: '<div>' +
        '<a class="menu-btn" href="#" id="enter_mt_plan_a">企业维护计划</a>' +
        '<a class="menu-btn" href="#" id="enter_mt_info_a">企业维护信息</a>' +
        '</div>' +
        '<div>' +
        '<a class="menu-btn" href="#" id="fin_service_a">融资服务</a>' +
        '<a class="menu-btn" href="#" id="export_a">导入导出</a>' +
        '<a class="menu-btn" href="#" id="inner_info_a">站内信息</a>' +
        '</div>',


        systemOpt: '<div>' +
        '<a class="menu-btn" href="#" id="user_mt_a">用户管理</a>' +
        '<a class="menu-btn" href="#" id="menu_mt_a">菜单管理</a>' +
        '<a class="menu-btn" href="#" id="role_mt_a">角色管理</a>' +
        '<a class="menu-btn" href="#" id="act_mt_a">操作管理</a>' +
        '<a class="menu-btn" href="#" id="sec_mt_a">权限管理</a>' +
        '<a class="menu-btn" href="#" id="sys_dict_a">系统字典</a>' +
        '<a class="menu-btn" href="#" id="login_log_a">登录日志</a>' +
        '</div>',

        // 系统信息
        system : {
            name : '工程项目合同及资金管理系统',
            version : '5.2014.06.60',
            iconUrl : ''
        },

        // 用户单位信息和用户信息
        user : {
            company : '武当太极公司',
            department : '工程部',
            name : '张三丰'
        },

        // 服务单位和服务人员信息
        service : {
            company : '无锡熙旺公司',
            name : '蒋锋',
            phonenumber : '1320528----',
            qq : '78580822',
            email : 'jfok1972@qq.com',
            copyright : '熙旺公司'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
