<template>
    <div class="main-content">
        <ButtonPanel>
            <div slot='leftTool'>
                <span style="display:inline-block"></span>
            </div>
            <div slot='rightTool' class="rightTool">
                <el-button type="primary" size="mini" icon="el-icon-plus" @click="add">新增</el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteBatch">批量删除</el-button>
            </div>
        </ButtonPanel>
        <div>
            <WrapPanel :single="false">
                <div slot="rightWrap">
                    <tree-table :data="data" :columns="columns" border>
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button type="success" plain size="mini" @click="submit(scope.row)"
                                           icon="iconfont icon-setting-permissions" >
                                    确认
                                </el-button>
                                <el-button type="warning" plain size="mini" icon="iconfont icon-circle-down"
                                           @click="cancel(scope.row)">
                                    取消
                                </el-button>
                            </template>
                        </el-table-column>
                    </tree-table>
                </div>
            </WrapPanel>
        </div>

        <!--新增-->
        <div>
            <el-dialog :title="demoWindowConfig.title" :visible.sync="demoWindowConfig.visible">
                <el-form :model="demoWindowConfig.form">
                    <el-form-item label="菜单名称" :label-width="demoWindowConfig.formLabelWidth">
                        <el-input v-model="demoWindowConfig.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="demoWindowConfig.visible = false">取 消</el-button>
                    <el-button type="primary" @click="updata">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import ButtonPanel from '@/components/ButtonPanel';
    import WrapPanel from '@/components/WrapPanel';
    import TreeTable from '@/components/TreeTable';
    import customTreeTable from '@/components/TreeTable/customTreeTable';
    import { getMenuList, addMenu, deleteMenu, modify, getById, batchDeleteMenu } from '@/api/project/demo';

    export default {
        name: 'demoOne',
        data() {
            return {
                columns: [
                    {
                        text: '事件',
                        value: 'event',
                        width: 200
                    },
                    {
                        text: 'ID',
                        value: 'id'
                    },
                    {
                        text: '时间线',
                        value: 'timeLine'
                    }
                ],
                data: [
                    {
                        id: 0,
                        event: '事件1',
                        timeLine: 50,
                        comment: '无'
                    },
                    {
                        id: 1,
                        event: '事件1',
                        timeLine: 100,
                        comment: '无',
                        children: [
                            {
                                id: 2,
                                event: '事件2',
                                timeLine: 10,
                                comment: '无'
                            },
                            {
                                id: 3,
                                event: '事件3',
                                timeLine: 90,
                                comment: '无',
                                children: [
                                    {
                                        id: 4,
                                        event: '事件4',
                                        timeLine: 5,
                                        comment: '无'
                                    },
                                    {
                                        id: 5,
                                        event: '事件5',
                                        timeLine: 10,
                                        comment: '无'
                                    },
                                    {
                                        id: 6,
                                        event: '事件6',
                                        timeLine: 75,
                                        comment: '无',
                                        children: [
                                            {
                                                id: 7,
                                                event: '事件7',
                                                timeLine: 50,
                                                comment: '无',
                                                children: [
                                                    {
                                                        id: 71,
                                                        event: '事件71',
                                                        timeLine: 25,
                                                        comment: 'xx'
                                                    },
                                                    {
                                                        id: 72,
                                                        event: '事件72',
                                                        timeLine: 5,
                                                        comment: 'xx'
                                                    },
                                                    {
                                                        id: 73,
                                                        event: '事件73',
                                                        timeLine: 20,
                                                        comment: 'xx'
                                                    }
                                                ]
                                            },
                                            {
                                                id: 8,
                                                event: '事件8',
                                                timeLine: 25,
                                                comment: '无'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                demoWindowConfig:{
                    title:'样例弹框',
                    visible:false,
                    form:{
                        name:'名字'
                    }
                }
            };
        },
        methods: {
            add(){
                this.demoWindowConfig.visible = true;
            },
            updata(){
                this.demoWindowConfig.visible = false;
            },
            deleteBatch(){
                this.$alert('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            submit(r){
                this.$message({
                    message: `点击了确认${r.event}！！`,
                    type: 'success'
                });
            },
            cancel(r){
                this.$message({
                    message: `点击了取消${r.event}~~`,
                    type: 'error'
                });
            }
        },
        mounted() {

        },
        components: {
            ButtonPanel,
            WrapPanel,
            customTreeTable,
            TreeTable
        }
    };
</script>

<style scoped lang="scss">
    .main-content {
        padding: 18px;
        background-color: #f0f2f5;
        min-height: calc(100vh - 85px);
        height: 100%;
        .button-panel {
            margin-bottom: 18px;
        }
        .el-input {
            input {
                height: 29px;
            }
        }
        .el-table__row td:last-child {
            text-align: center;
        }
    }
</style>
