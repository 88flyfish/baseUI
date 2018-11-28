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
                    <fast-table :columns='tableColumn'
                                :queryApi="gridConfig.searchCallBack"
                                :updateApi="gridConfig.searchCallBack"
                                :removeApi="gridConfig.deleteCallBack"
                                :modifyApi="gridConfig.modifyCallback"
                                @getSelections="getSelection"
                                ref="fastTable"
                                :keyword="gridConfig.name">
                    </fast-table>
                </div>
            </WrapPanel>
        </div>

        <!--新增-->
        <div>
            <el-dialog :title="demoWindowConfig.title" :visible.sync="demoWindowConfig.visible">
                今天天气不错~~~
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import ButtonPanel from '@/components/ButtonPanel';
    import WrapPanel from '@/components/WrapPanel';
    import FastTable from '@/components/FastTable';
    import { getDemoList ,deleteItem ,modifyItem} from '@/api/project/demo';

    export default {
        name: 'demoTwo',
        components: {
            ButtonPanel,
            WrapPanel,
            FastTable
        },
        data() {
            return {
                gridConfig:{
                    name:null,
                    searchCallBack:getDemoList,
                    deleteCallBack:deleteItem,
                    modifyCallback:modifyItem
                },
                tableColumn: [
                    {
                        text: '项目名称',
                        value: 'name',
                        show: true
                    },
                    {
                        text: "状态",
                        value: 'state'
                    }
                ],
                demoWindowConfig:{
                    title:'',
                    visible:false,
                    formLabelWidth:'120px',
                }
            };
        },
        methods: {
            add() {
                this.demoWindowConfig.visible =  true;
            },
            deleteBatch(){
                this.$notify({
                    title: '提示',
                    message: '今天天气不怎么样~~~',
                    type: 'warning'
                });
            },
            getSelection(){}
        },
        mounted() {

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
