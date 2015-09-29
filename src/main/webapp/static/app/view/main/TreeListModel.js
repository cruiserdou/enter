/**
 * Created by dou on 15-9-5.
 */
Ext.define('app.view.main.TreeListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tree-list',
    formulas: {
        selectionText: function (get) {
            var selection = get('treelist.selection');
            if (selection) {
                var itype = selection.getData().itype;
                if (itype != 'entermtview') {
                    var itemId = selection.getData().itype + '_id';
                    var tabItem = Ext.getCmp(itemId);
                    if (!tabItem && selection.getData().itype != 'nleaf') {
                        tabItem = Ext.getCmp('mTabpanel').add(
                            {
                                xtype: selection.getData().itype,
                                id: itemId,
                                title: selection.getData().text,
                                iconCls: selection.getData().iconCls
                            }
                        );
                    }
                    Ext.getCmp('mTabpanel').setActiveTab(tabItem);
                } else {
                    var itemId = selection.getData().itype + '_id';
                    var tabItem = Ext.getCmp(itemId);
                    if (!tabItem && selection.getData().itype != 'nleaf') {
                        tabItem = Ext.getCmp('mTabpanel').add(
                            {
                                xtype: selection.getData().itype,
                                id: itemId,
                                title: selection.getData().text,
                                iconCls: selection.getData().iconCls
                            }
                        );
                    }
                    Ext.getCmp('mTabpanel').setActiveTab(tabItem);
                }

                return 'Selected: ';
            } else {
                return 'No node selected';
            }
        }
    },

    stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    {
                        text: '信息查询',
                        expanded: true,
                        iconCls: 'x-fa fa-search',
                        itype: 'nleaf',
                        children: [{
                            text: '企业信息查询',
                            iconCls: 'x-fa fa-search',
                            itype: 'enterinfoview',
                            leaf: true
                        }, {
                            text: '服务机构查询',
                            iconCls: 'x-fa fa-search',
                            itype: 'serviceqview',
                            leaf: true
                        }, {
                            text: '投资人查询',
                            iconCls: 'x-fa fa-search',
                            itype: 'investorqview',
                            leaf: true
                        }, {
                            text: '政府部门信息查询',
                            iconCls: 'x-fa fa-search',
                            itype: 'govqview',
                            leaf: true
                        }, {
                            text: '需求查询',
                            iconCls: 'x-fa fa-list',
                            itype: 'nleaf',
                            children: [{
                                text: '融资需求查询',
                                iconCls: 'x-fa fa-search',
                                itype: 'refiqview',
                                leaf: true
                            }, {
                                text: '培训需求查询',
                                iconCls: 'x-fa fa-search',
                                itype: 'retrqview',
                                leaf: true
                            }, {
                                text: '人力资源需求查询',
                                iconCls: 'x-fa fa-search',
                                itype: 'rehrqview',
                                leaf: true
                            }]
                        }]
                    }, {
                        text: '信息管理',
                        expanded: true,
                        iconCls: 'x-fa fa-edit',
                        itype: 'nleaf',
                        children: [{
                            text: '企业信息管理',
                            iconCls: 'x-fa fa-edit',
                            itype: 'entermtview',
                            leaf: true
                        }, {
                            text: '服务机构管理',
                            iconCls: 'x-fa fa-edit',
                            itype: 'servicemtview',
                            leaf: true
                        }, {
                            text: '投资人管理',
                            iconCls: 'x-fa fa-edit',
                            itype: 'investormtview',
                            leaf: true
                        }, {
                            text: '政府部门信息管理',
                            iconCls: 'x-fa fa-edit',
                            itype: 'govmtview',
                            leaf: true
                        }, {
                            text: '需求管理',
                            iconCls: 'x-fa fa-list',
                            itype: 'nleaf',
                            children: [{
                                text: '融资需求管理',
                                iconCls: 'x-fa fa-edit',
                                itype: 'refiview',
                                leaf: true
                            }, {
                                text: '培训需求管理',
                                iconCls: 'x-fa fa-edit',
                                itype: 'retrview',
                                leaf: true
                            }, {
                                text: '人力资源需求管理',
                                iconCls: 'x-fa fa-edit',
                                itype: 'rehrview',
                                leaf: true
                            }]
                        }]
                    }, {
                        text: '信息统计',
                        expanded: false,
                        iconCls: 'x-fa fa-bar-chart',
                        itype: 'nleaf',
                        children: [{
                            text: '企业信息统计',
                            iconCls: 'x-fa fa-bar-chart',
                            itype: 'enterstatis',
                            leaf: true
                        }, {
                            text: '服务机构统计',
                            iconCls: 'x-fa fa-bar-chart',
                            itype: 'servicestatis',
                            leaf: true
                        }, {
                            text: '投资人统计',
                            iconCls: 'x-fa fa-bar-chart',
                            itype: 'investorstatis',
                            leaf: true
                        }, {
                            text: '政府部门信息统计',
                            iconCls: 'x-fa fa-bar-chart',
                            itype: 'govstatis',
                            leaf: true
                        }, {
                            text: '需求统计',
                            iconCls: 'x-fa fa-list',
                            itype: 'nleaf',
                            children: [{
                                text: '融资需求统计',
                                iconCls: 'x-fa fa-bar-chart',
                                itype: 'fsdmstatis',
                                leaf: true
                            }, {
                                text: '培训需求统计',
                                iconCls: 'x-fa fa-bar-chart',
                                itype: 'traindmstatis',
                                leaf: true
                            }, {
                                text: '人力资源需求统计',
                                iconCls: 'x-fa fa-bar-chart',
                                itype: 'hrdmstatis',
                                leaf: true
                            }]
                        }]
                    }, {
                        text: '工作管家',
                        expanded: false,
                        iconCls: 'x-fa fa-desktop',
                        itype: 'nleaf',
                        children: [{
                            text: '企业维护',
                            iconCls: 'x-fa fa-list',
                            itype: 'nleaf',
                            children: [{
                                text: '维护计划',
                                iconCls: 'x-fa fa-desktop',
                                itype: 'maintainplanview',
                                leaf: true
                            }, {
                                text: '维护信息',
                                iconCls: 'x-fa fa-desktop',
                                itype: 'maintaininfoview',
                                leaf: true
                            }]
                        }, {
                            text: '融资服务',
                            iconCls: 'x-fa fa-desktop',
                            itype: 'refimosfview',
                            leaf: true
                        }, {
                            text: '导入导出',
                            iconCls: 'x-fa fa-desktop',
                            itype: 'exportview',
                            leaf: true
                        }, {
                            text: '站内信息',
                            iconCls: 'x-fa fa-desktop',
                            itype: 'msgview',
                            leaf: true
                        }]
                    }

                    , {
                        text: '安全管理',
                        expanded: false,
                        iconCls: 'x-fa fa-shield',
                        itype: 'nleaf',
                        children: [{
                            text: '用户',
                            iconCls: 'x-fa fa-users',
                            itype: 'userview',
                            leaf: true
                        }, {
                            text: '菜单',
                            iconCls: 'x-fa fa-shield',
                            itype: 'menuview',
                            leaf: true
                        }, {
                            text: '角色',
                            iconCls: 'x-fa fa-users',
                            itype: 'roleview',
                            leaf: true
                        }, {
                            text: '操作',
                            iconCls: 'x-fa fa-shield',
                            itype: 'actview',
                            leaf: true
                        }, {
                            text: '权限',
                            iconCls: 'x-fa fa-shield',
                            itype: 'secview',
                            leaf: true
                        }, {
                            text: '系统字典',
                            iconCls: 'x-fa fa-shield',
                            itype: 'sysdictview',
                            leaf: true
                        }, {
                            text: '登录日志',
                            iconCls: 'x-fa fa-shield',
                            itype: 'loginlog',
                            leaf: true
                        }]
                    }]
            }
        }
    }
});
