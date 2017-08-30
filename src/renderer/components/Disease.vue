<template>
    <div>
        <!-- トップナビ -->
        <headerNav></headerNav>
        <!-- コンテンツ -->
        <div class="container">
            <h1 class="text-center mg-t-100"><i class="fa fa-stethoscope mg-r-15"></i>疾病分類検索フォーム</h1>
            <p class="text-center">傷病名を下記フォームに入力してください</p>
            <div class="form-group search-btn mg-t-40">
                <input type="text" v-model="findWord" class="form-control form-control-lg">
                <button @click="dbQuery" class="btn btn-success btn-lg mg-l-20">検索</button>
            </div>
            <!-- 検索結果テーブル -->
            <table class="table table-striped table-bordered mg-t-50 search-table" v-if="findRisult.length !== 0">
                <thead>
                    <tr class="table-success">
                        <td>疾病</td>
                        <td>大分類</td>
                        <td>中分類</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in findRisult">
                        <td>{{ item.case }}</td>
                        <td>{{ item.class1 }}</td>
                        <td>{{ item.class2 }}</td>
                    </tr>
                </tbody>
            </table>
            <div v-else-if="Array.isArray(findRisult)">
                <h4 class="text-center mg-t-50">検索文字が見つかりません。文字を削るなどして再検索してください。</h4>
            </div>
            <topLink></topLink>
        </div>
    </div>
</template>


<script>


// templateの読み込み
import headerNav from './common/headerNav.vue'
import topLink from './common/topLink.vue'

// ---------------------------------------------------------------------
// NeDB設定
// ---------------------------------------------------------------------

//インメモリでDB作成
var Database = require("nedb");
var diseaseDB = new Database();
//データ読み込み挿入
import dbData from './diseaseConv.json';
diseaseDB.insert(dbData);


// ---------------------------------------------------------------------
// vue スクリプト
// ---------------------------------------------------------------------
export default {
    components: {
        headerNav,
        topLink,
    },
    data () {
        return {
            findWord : '',
            findRisult: '',
            erre: ''
        }
    },
    methods: {
        dbQuery: function () {
            diseaseDB.find({case: new RegExp(".*"+this.findWord+".*", "i")} , function (err, doc) {
                this.findRisult = doc;
            }.bind(this));
        }
    },
    name: 'disease'
}
</script>
