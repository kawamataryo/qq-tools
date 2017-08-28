<template>
    <div>
        <!-- トップナビ -->
        <headerNav></headerNav>
        <!-- コンテンツ -->
        <div class="container">
            <h1 class="main-title">救急報告書文章作成フォーム<span>ver 1</span></h1>
            <h2 class="tab-title">{{ tabTitle }}</h2>
            <!-- タブリスト -->
            <ul class="nav nav-tabs" id="caseTab">
                <li class="nav-item">
                    <a class="nav-link tab-kyu active" href="#kyubyou" data-toggle="tab" v-on:click="titleSet('急病')">急病</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link tab-ippan" href="#ippan" data-toggle="tab" v-on:click="titleSet('一般負傷')">一般負傷</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link tab-kotsu" href="#kotsu" data-toggle="tab" v-on:click="titleSet('交通')">交通</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link tab-tensou" href="#tensou" data-toggle="tab" v-on:click="titleSet('転院搬送')">転院搬送</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link tab-cpa" href="#cpa" data-toggle="tab" v-on:click="titleSet('CPA')">CPA</a>
                </li>
            </ul>
            <!-- タブコンテンツ -->
            <div class="tab-content">
                <div class="tab-pane active" id="kyubyou" role="tabpanel">
                    <kyubyou :pose="pose" :jcs="jcs" :rr="rr" :hr="hr" :kanplace="kanplace" :vital="vital" :body="body" :trans="trans" :heat="heat" :oxgen="oxgen" :oxnum="oxnum"></kyubyou>
                </div>
                <div class="tab-pane" id="ippan" role="tabpanel">
                    <ippan :pose="pose" :jcs="jcs" :rr="rr" :hr="hr" :kanplace="kanplace" :vital="vital" :body="body" :trans="trans" :observ="observ" :scratch="scratch" :cm="cm" :care="care"></ippan>
                </div>
                <div class="tab-pane" id="kotsu" role="tabpanel">
                    <kotsu :pose="pose" :jcs="jcs" :rr="rr" :hr="hr" :vital="vital" :body="body" :trans="trans" :observ="observ" :scratch="scratch" :cm="cm" :care="care" :fixed="fixed" :heat="heat" :oxgen="oxgen" :oxnum="oxnum"></kotsu>
                </div>
                <div class="tab-pane" id="tensou" role="tabpanel">
                    <tensou :pose="pose" :jcs="jcs" :rr="rr" :hr="hr" :vital="vital" :body="body" :trans="trans" :heat="heat" :oxgen="oxgen" :oxnum="oxnum" :ride="ride"></tensou>
                </div>
                <div class="tab-pane" id="cpa" role="tabpanel">準備中</div>
            </div>
        </div>
    </div>
</template>

<script>

// templateの読み込み
import headerNav from './common/headerNav.vue'
import kyubyou from './forms/Kyubyou.vue'
import ippan from './forms/ippan.vue'
import kotsu from './forms/kotsu.vue'
import tensou from './forms/tensou.vue'
// vuebinding
export default {
    components: {
        headerNav,
        kyubyou,
        ippan,
        kotsu,
        tensou,
    },
    data () {
        return {
            tabTitle: '急病',
            jcs: [
            { text: '意識晴明', value: '意識晴明' },
            { text: 'JCSⅠー１', value: '意識レベルJCSⅠ－１' },
            { text: 'JCSⅠー２', value: '意識レベルJCSⅠ－２' },
            { text: 'JCSⅠー３', value: '意識レベルJCSⅠ－３' },
            { text: 'JCSⅡー１０', value: '意識レベルJCSⅡ－10' },
            { text: 'JCSⅡー２０', value: '意識レベルJCSⅡ－20' },
            { text: 'JCSⅡー３０', value: '意識レベルJCSⅡ－30' },
            { text: 'JCSⅢー１００', value: '意識レベルJCSⅢ－100' },
            { text: 'JCSⅢー２００', value: '意識レベルJCSⅢ－200' },
            { text: 'JCSⅢー３００', value: '意識レベルJCSⅢ－300' },
            { text: '酩酊状態', value: '酩酊状態' },
            ],
            pose: [
                '仰臥位',
                '右側臥位',
                '左側臥位',
                '坐位',
                '半坐位',
                '立位',
                '腹臥位',
            ],
            rr: [
                '正常',
                '頻呼吸',
                '徐呼吸'
            ],
            hr: [
                '正常',
                '頻脈',
                '徐脈',
                '不整脈'
            ],
            kanplace: [
                '現場',
                '車内',
            ],
            vital: [
                '血圧',
                '体温',
                'SpO2',
                '瞳孔',
                '心電図',
            ],
            body: [
            { text: '呼吸音', value: '呼吸音の聴診' },
            { text: '腹部触診', value: '腹部の触診' },
            { text: '神経学的所見', value: '神経学的所見の観察' },
            ],
            oxgen: [
                '投与なし',
                '中濃度マスク',
                '高濃度マスク',
                '鼻カニューレ',
            ],
            oxnum: [
                '投与量',
                '１リットル',
                '２リットル',
                '３リットル',
                '４リットル',
                '５リットル',
                '６リットル',
                '７リットル',
                '８リットル',
                '９リットル',
                '10リットル',
            ],
            trans: [
                '独歩',
                'メインストレッチャー',
                'レスキューキャリーマットとメインストレッチャー',
                'バックボードとメインストレッチャー',
                'スクープストレッチャーとメインストレッチャー',
            ],
            heat: [
                'あり',
                'なし',
            ],
            observ: [
                '受傷部位の観察',
                '全身観察',
            ],
            scratch: [
                'なし',
                '腫脹',
                '挫創',
                '裂創',
                '切創',
                '変形',
                '擦過傷',
                '挫傷',
                '裂傷',
                '切傷',
                '刺創',
                '刺創',
            ],
            cm: [
                'cm',
                '１cm',
                '２cm',
                '３cm',
                '４cm',
                '５cm',
                '６cm',
                '７cm',
                '８cm',
                '９cm',
                '11cm',
                '12cm',
                '13cm',
                '14cm',
                '15cm',
                '16cm',
                '17cm',
                '18cm',
                '19cm',
                '20cm',
                ],
                care: [
                    'なし',
                    '滅菌ガーゼで被覆',
                    '滅菌ガーゼと三角布で被覆',
                    '滅菌ガーゼとネット包帯で被覆',
                    '滅菌ガーゼで圧迫止血',
                    'シーネと三角布で固定',
                    '毛布で固定',
                ],
                ride: [
                    'なし',
                    '看護師',
                    '医師',
                ],
                fixed: [
                    'なし',
                    '頸部を頚椎カラーで固定',
                    'バックボードに全身固定',
                ]
        }
    },
    methods: {
        titleSet: function (title) {
            this.tabTitle = title
        }
    },
    name: 'home'
}
</script>
