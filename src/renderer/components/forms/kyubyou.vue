<template>
    <section class="kyuTab" id="kyuTab">
        <!-- -------------------------------------------------------------------------------------------- -->
        <!-- フォーム -->
        <!-- -------------------------------------------------------------------------------------------- -->
        <form>
            <div class="row">
                <!-- 一列目 -->
                <div class="col-sm-6">
                    <!-- 接触場所 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">接触場所</label>
                        <div class="col-9">
                            <input class="form-control" type="text" placeholder="例: 居室の床" v-model="place">
                        </div>
                    </div>
                    <!-- 体位 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">体位</label>
                        <div class="col-9">
                            <select class="form-control" v-model="poseIn">
                                <option v-for="po in pose">{{ po }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- 意識レベル -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">意識レベル</label>
                        <div class="col-9">
                            <select class="form-control" v-model="jcsIn">
                                <option v-for="jc in jcs" v-bind:value="jc.value">{{ jc.text }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- 呼吸数 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">呼吸数</label>
                        <div class="col-9">
                            <select class="form-control" v-model="rrIn">
                                <option v-for="r in rr">{{ r }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- 脈拍数 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">脈拍数</label>
                        <div class="col-9">
                            <select class="form-control" v-model="hrIn">
                                <option v-for="h in hr">{{ h }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- 主訴 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">主訴</label>
                        <div class="col-9">
                            <input class="form-control" type="text" placeholder="例: 胸痛" v-model="syuso">
                        </div>
                    </div>
                </div>
                <!-- 二列目 -->
                <div class="col-sm-6">
                    <!-- 二次観察の場所 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">測定場所</label>
                        <div class="col-9">
                            <div class="form-check form-check-inline" v-for="kanp in kanplace">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="radio" v-bind:value="kanp" v-model="kanplaceIn">  {{ kanp }}
                                </label>
                            </div>
                        </div>
                    </div>
                    <!-- バイタル測定 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">バイタル測定</label>
                        <div class="col-9">
                            <div class="form-check form-check-inline" v-for="vi in vital">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-bind:value="vi" v-model="vitalIn">  {{ vi }}
                                </label>
                            </div>
                        </div>
                    </div>
                    <!-- 身体所見 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">身体所見</label>
                        <div class="col-9">
                            <div class="form-check form-check-inline" v-for="bo in body">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-bind:value="bo.value" v-model="bodyIn">  {{ bo.text }}
                                </label>
                            </div>
                        </div>
                    </div>
                    <!-- 酸素投与 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">酸素投与</label>
                        <div class="col-4">
                            <select class="form-control" v-model="oxgenIn">
                                <option v-for="ox in oxgen">{{ ox }}</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <select class="form-control mg-l-20" v-model="oxnumIn">
                                <option v-for="oxn in oxnum">{{ oxn }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- 搬出方法 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">搬出方法</label>
                        <div class="col-9">
                            <select class="form-control" v-model="transIn">
                                <option v-for="tr in trans">{{ tr }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- 毛布による保温 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">保温の有無</label>
                        <div class="col-9">
                            <div class="form-check form-check-inline" v-for="he in heat">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="radio" v-bind:value="he" v-model="heatIn">  {{ he }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <!-- -------------------------------------------------------------------------------------------- -->
        <!-- モーダル関連 -->
        <!-- -------------------------------------------------------------------------------------------- -->
        <!-- 文章表示ボタン -->
        <hr>
        <button type="button" class="btn btn-primary btn-block mg-t-30" data-toggle="modal" data-target="#kyuResult">文章作成</button>

        <!-- 結果表示モーダル -->
        <div class="modal fade" id="kyuResult" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body" id="kyuResltText">
                        {{ result }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary clip_copy_btn" data-clipboard-target="#kyuResltText">文章をコピー</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    var sentence = require('../../myfunc.js')
    export default {
        props: {
            'pose': Array,
            'jcs' : Array,
            'rr' : Array,
            'hr' : Array,
            'kanplace' : Array,
            'vital' : Array,
            'body' : Array,
            'trans' : Array,
            'heat' : Array,
            'oxgen' : Array,
            'oxnum' : Array,
        },
        data () {
            return {
                place : "",
                poseIn : "仰臥位",
                jcsIn: "意識晴明",
                rrIn: "正常",
                hrIn: "正常",
                syuso: "",
                kanplaceIn: "現場",
                vitalIn: [],
                bodyIn: [],
                oxgenIn: "投与なし",
                oxnumIn: "投与量",
                transIn: "独歩",
                heatIn: "なし"
            }
        },
        computed: {
            result: function () {
                if(this.oxgenIn == "投与なし") {
                    // 酸素投与なし
                    if(this.kanplaceIn == "現場") {
                        // 現場で二次観察
                        var join =
                            "一次観察の結果は，" + this.place + "に" + this.poseIn + "で" + this.jcsIn + "，" +
                            sentence.createHRS(this.rrIn, this.hrIn, this.syuso)  +
                            "二次観察として状況聴取とともに" + sentence.createVB(this.vitalIn,this.bodyIn) + "を行う。" +
                            this.transIn + "で車内収容し，医療機関の選定後に" + sentence.createHEAT(this.heatIn) +
                            "継続観察をして搬送する。";
                    }else {
                        // 車内で二次観察
                        var join =
                            "一次観察の結果は，" + this.place + "に" + this.poseIn + "で" + this.jcsIn + "，" +
                            sentence.createHRS(this.rrIn, this.hrIn, this.syuso)  +
                            this.transIn + "で車内収容する。" + "二次観察として，状況聴取とともに" +
                            sentence.createVB(this.vitalIn,this.bodyIn) + "を行う。" +
                            "医療機関の選定後は，" + sentence.createHEAT(this.heatIn) + "継続観察をして搬送する。";
                    }
                }else {
                    // 酸素投与あり
                    if(this.kanplaceIn == "現場") {
                        // 現場で二次観察
                        var join =
                            "一次観察の結果は，" + this.place + "に" + this.poseIn + "で" + this.jcsIn + "，" +
                            sentence.createHRS(this.rrIn, this.hrIn, this.syuso)  +"二次観察として状況聴取とともに" +
                            sentence.createVBandO(this.vitalIn,this.bodyIn,this.oxgenIn,this.oxnumIn) + "を行う。" +
                            this.transIn + "で車内収容し，医療機関の選定後に" + sentence.createHEAT(this.heatIn) +
                            "継続観察をして搬送する。";
                    }else {
                        // 車内で二次観察
                        var join =
                            "一次観察の結果は，" + this.place + "に" + this.poseIn + "で" + this.jcsIn + "，" +
                            sentence.createHRS(this.rrIn, this.hrIn, this.syuso)  +
                            this.transIn + "で車内収容する。" + "二次観察として，状況聴取とともに" +
                            sentence.createVBandO(this.vitalIn,this.bodyIn,this.oxgenIn,this.oxnumIn) + "を行う。" +
                            "医療機関の選定後は，" + sentence.createHEAT(this.heatIn) + "継続観察をして搬送する。";
                    }
                }
                return join
            }
        }
    }
</script>
