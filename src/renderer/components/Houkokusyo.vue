<template>
    <div>
        <!-- トップナビ -->
        <headerNav></headerNav>
        <!-- コンテンツ -->
        <div class="container">
            <h1 class="text-center mg-t-100"><i class="fa fa-search mg-r-15"></i>過去事案検索フォーム</h1>
            <p class="text-center">検索文字を下記フォームに入力してください</p>
            <div class="form-group search-btn mg-t-40">
                <input type="text" v-model="findWord" class="form-control form-control-lg">
                <button id="hokoku-button" @click="dbQuery" class="btn btn-warning btn-lg mg-l-20">検索</button>
            </div>
            <!-- 検索結果テーブル -->
            <table id="hokoku-tb" class="tablesorter table table-striped table-bordered mg-t-50 search-table" v-if="findRisult.length !== 0">
                <thead>
                    <tr class="table-warning">
                        <th>日付</th>
                        <th>隊</th>
                        <th>種別</th>
                        <th>人数</th>
                        <th>概要備考</th>
                        <th>事故等の内容</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in findRisult">
                        <td>{{ item.day }}</td>
                        <td>{{ item.team }}</td>
                        <td>{{ item.case }}</td>
                        <td>{{ item.num }}</td>
                        <td>{{ item.biko }}</td>
                        <td>{{ item.naiyo }}</td>
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
var houkokusyoDB = new Database();
//データ読み込み挿入
import dbData from './houkokusyo.json';
houkokusyoDB.insert(dbData);


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
            houkokusyoDB.find({biko: new RegExp(".*"+this.findWord+".*", "i")} , function (err, doc) {
                this.findRisult = doc.sort((a, b) => {
                    if (a.day > b.day) return -1;
                    if (a.day < b.day) return 1;
                    return 0;
                });
            }.bind(this));
        },
        sortBy: function(sortKey) {
          this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
          this.sortKey = sortKey;
        }
    },
    name: 'houkokusyo'
}
</script>
