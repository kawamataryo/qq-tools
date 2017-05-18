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
                        <router-link to="/db" class="nav-link link-db"><i class="fa fa-search mg-r-5" aria-hidden="true"></i>過去事案検索</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- コンテンツ -->
        <div class="container">
            <h1 class="text-center mg-t-100"><i class="fa fa-stethoscope mg-r-15"></i>疾病分類検索フォーム</h1>
            <p class="text-center">傷病名を下記フォームに入力してください</p>
            <div class="form-group search-btn mg-t-40">
                <input type="text" v-model="findWord" class="form-control form-control-lg">
                <button @click="dbQuery" class="btn btn-success btn-lg mg-l-20">検索</button>
            </div>
            <!-- 検索結果テーブル -->
            <table class="table table-striped table-bordered mg-t-50 search-table" v-if="findRisult != ''">
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
        </div>
        {{ erre }}
    </div>
</template>


<script>

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
