<template>
    <div>
        <!-- トップナビ -->
        <nav class="navbar navbar-light navbar-toggleable-xl bg-faded mg-b-30">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/write" class="nav-link link-write"><i class="fa fa-pencil mg-r-5" aria-hidden="true"></i>文章作成フォーム</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/db" class="nav-link link-db"><i class="fa fa-search mg-r-5" aria-hidden="true"></i>過去事案検索</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/disease" class="nav-link link-db"><i class="fa fa-stethoscope mg-r-5" aria-hidden="true"></i>疾病分類検索</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="menu-block">
            <div>
                <div class="menu-block-list">
                    <router-link to="write" class="link-write btn btn-lg btn-primary"><span class="b-title"><i class="fa fa-pencil"></i>文章作成</span><p>概要備考の文章を選択形式で作成。<span class="come">※ 急病、一般、転院搬送のみ利用可</span></p></router-link>
                </div>
                <div class="menu-block-list mg-t-50">
                    <router-link to="db" class="link-db btn btn-lg btn-warning"><span class="b-title"><i class="fa fa-search"></i>過去事案検索</span><p>北署,内原の過去事案の本文一覧を表示<span class="come">※ 2016/4/1〜2017/4/10</span></p>
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
    export default {
        name: 'index'
    }
</script>
