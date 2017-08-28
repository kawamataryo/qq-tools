<template>

    <div>
        <!-- トップナビ -->
        <headerNav></headerNav>
        <!-- フロントメニュー -->
        <div class="menu-block">
            <div>
                <div class="menu-block-list">
                    <router-link to="write" class="link-write btn btn-lg btn-primary"><span class="b-title"><i class="fa fa-pencil"></i>文章作成</span><p>概要備考の文章を選択形式で作成。<span class="come">※ 急病、一般、転院搬送のみ利用可</span></p></router-link>
                </div>
                <div class="menu-block-list mg-t-50">
                    <router-link to="houkokusyo" class="link-db btn btn-lg btn-warning"><span class="b-title"><i class="fa fa-search"></i>過去事案検索</span><p>北管内の過去事案の本文一覧を検索<span class="come">※ 2016/4/1〜2017/7/20</span></p>
                    </router-link>
                </div>
                <div class="menu-block-list mg-t-50">
                    <router-link to="disease" class="link-db btn btn-lg btn-success"><span class="b-title"><i class="fa fa-stethoscope"></i>疾病分類検索</span><p>傷病名からICD10 国際疾病分類を検索。</p></router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    // templateの読み込み
    import headerNav from './common/headerNav.vue'

    export default {
        components: {
            headerNav,
        },
        name: 'index'
    }
</script>
