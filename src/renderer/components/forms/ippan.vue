<template>
    <section class="ippanTab" id="ippanTab">
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
                            <input class="form-control" type="text" placeholder="例: 前額部の痛み" v-model="syuso">
                        </div>
                    </div>
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
                </div>
                <!-- 二列目 -->
                <div class="col-sm-6">
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
                    <!-- 観察 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">観察項目</label>
                        <div class="col-9">
                            <div class="form-check form-check-inline" v-for="ob in observ">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="radio" v-bind:value="ob" v-model="observIn">  {{ ob }}
                                </label>
                            </div>
                        </div>
                    </div>
                    <!-- 受傷部位 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">受傷部位</label>
                        <div class="col-9">
                            <input class="form-control" type="text" placeholder="例: 前額部" v-model="damageposi">
                        </div>
                    </div>
                    <!-- 創傷 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">創傷</label>
                        <div class="col-4">
                            <select class="form-control" v-model="scratchIn">
                                <option v-for="sc in scratch">{{ sc }}</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <select class="form-control mg-l-20" v-model="cmIn">
                                <option v-for="c in cm">{{ c }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- 処置 -->
                    <div class="form-group row no-gutters">
                        <label class="col-3 col-form-label">処置</label>
                        <div class="col-9">
                            <select class="form-control" v-model="careIn">
                                <option v-for="ca in care">{{ ca }}</option>
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
                </div>
            </div>
        </form>
        <!-- -------------------------------------------------------------------------------------------- -->
        <!-- モーダル関連 -->
        <!-- -------------------------------------------------------------------------------------------- -->
        <!-- 文章表示ボタン -->
        <hr>
        <button type="button" class="btn btn-primary btn-block mg-t-30" data-toggle="modal" data-target="#ippanResult">文章作成</button>

        <!-- 結果表示モーダル -->
        <div class="modal fade" id="ippanResult" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body" id="ippanResltText">
                        {{ result }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary clip_copy_btn" data-clipboard-target="#ippanResltText">文章をコピー</button>
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
            'observ' : Array,
            'scratch' : Array,
            'cm' : Array,
            'care' : Array,
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
                transIn: "独歩",
                damageposi: "",
                observIn: "受傷部位の観察",
                scratchIn: "なし",
                careIn: "なし",
                cmIn : "cm",
            }
        },
        computed: {
            result: function () {
                if(this.scratchIn == "なし") {
                    // 創傷なし
                    if(this.kanplaceIn == "現場") {
                        // 現場で二次観察
                        var join =
                            "一次観察の結果は，" + this.place + "に" + this.poseIn + "で" + this.jcsIn + "，" +
                            sentence.createHRS(this.rrIn, this.hrIn, this.syuso)  +
                            "二次観察として状況聴取とともに，" + this.observIn + "と" + sentence.createVB(this.vitalIn,this.bodyIn) +
                            "を行う。" +
                            this.transIn + "で車内収容し，医療機関の選定後は、継続観察をして搬送する。";
                    }else {
                        // 車内で二次観察
                        var join =
                            "一次観察の結果は，" + this.place + "に" + this.poseIn + "で" + this.jcsIn + "，" +
                            sentence.createHRS(this.rrIn, this.hrIn, this.syuso)  +
                            this.transIn + "で車内収容する。" + "二次観察として状況聴取とともに，" + this.observIn + "と"
                            sentence.createVB(this.vitalIn,this.bodyIn) + "を行う。" +
                            "医療機関の選定後は，継続観察をして搬送する。";
                    }
                }else {
                    // 創傷あり
                    if(this.kanplaceIn == "現場") {
                        // 現場で二次観察
                        var join =
                            "一次観察の結果は，" + this.place + "に" + this.poseIn + "で" + this.jcsIn + "，" +
                            sentence.createHRS(this.rrIn, this.hrIn, this.syuso)  +"二次観察として状況聴取とともに，" +
                            this.observIn + "と" +
                            sentence.createVB(this.vitalIn,this.bodyIn) +
                            sentence.createCARE(this.damageposi, this.scratchIn, this.cmIn, this.careIn) +
                            this.transIn + "で車内収容し，医療機関の選定後は，継続観察をして搬送する。";
                    }else {
                        // 車内で二次観察
                        var join =
                            "一次観察の結果は，" + this.place + "に" + this.poseIn + "で" + this.jcsIn + "，" +
                            sentence.createHRS(this.rrIn, this.hrIn, this.syuso)  +
                            this.transIn + "で車内収容する。" + "二次観察として状況聴取とともに，" +
                            this.observIn + "と" +
                            sentence.createVB(this.vitalIn,this.bodyIn) +
                            sentence.createCARE(this.damageposi, this.scratchIn, this.cmIn, this.careIn) +
                            "医療機関の選定後は，継続観察をして搬送する。";
                    }
                }
                return join
            }
        }
    }
</script>
