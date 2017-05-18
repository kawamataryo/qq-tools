<template>
    <div>
        <!-- トップナビ -->
        <nav class="navbar navbar-light navbar-toggleable-xl bg-faded mg-b-30">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link link-index"><i class="fa fa-undo mg-r-5" aria-hidden="true"></i>戻る</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/write" class="nav-link link-write"><i class="fa fa-pencil mg-r-5" aria-hidden="true"></i>文章作成フォーム</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/disease" class="nav-link link-db"><i class="fa fa-stethoscope mg-r-5" aria-hidden="true"></i>疾病分類検索</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- コンテンツ -->
        <div class="container">
            <v-client-table :data="tableData" :columns="columns" :options="options" ref="setPage(3)"></v-client-table>
        </div>
    </div>
</template>


<script>
    //vue.js
    import postData from './caseDB.json';
    export default {
        name: 'db',
        data () {
            return {
                columns: ['隊','日','種別','人数','活動内容','概要備考'],
                tableData: postData,
                options: {
                    orderBy:{
                        ascending:false,
                        column: '日'
                    },
                    perPage: 100,
                    sortIcon: {
                        base: 'fa',
                        up: 'fa-caret-up',
                        down: 'fa-caret-down',
                    },
                    texts: {
                        count: '{from}から{to}件 / {count}件中',
                        filter: '検索フォーム',
                        filterPlaceholder: '検索したい文を入力',
                        limit: '表示件数',
                        noResults: 'マッチする文章が見つかりません',
                        loading: '検索中',
                    },
                    templates: {
                        活動内容: function(h, row) {
                            return row.活動内容.replace(/\\n/g,' ')
                        },
                        日: function (h, row) {
                            return row.日.slice(0,2) + '/' + row.日.slice(2,4) + '/' + row.日.slice(4,6)
                        },
                        人数: function (h, row) {
                            return row.人数 + '人'
                        }
                    }
                }
            }
        }
    }
</script>
