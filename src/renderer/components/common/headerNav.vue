<template>
    <nav class="navbar navbar-light navbar-toggleable-xl bg-faded mg-b-30">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link link-index"><i class="fa fa-undo mg-r-5" aria-hidden="true"></i>ホーム</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/write" class="nav-link link-write"><i class="fa fa-pencil mg-r-5" aria-hidden="true"></i>文章作成フォーム</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/houkokusyo" class="nav-link link-db"><i class="fa fa-search mg-r-5" aria-hidden="true"></i>過去事案検索</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/disease" class="nav-link link-db"><i class="fa fa-stethoscope mg-r-5" aria-hidden="true"></i>疾病分類検索</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
