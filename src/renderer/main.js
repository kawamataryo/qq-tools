import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app')

//独自追加vue-tables-2
import {ClientTable, Event} from 'vue-tables-2';
Vue.use(ClientTable)


// ---------------------------------------------------------------------
// devtoolをbuild時にも作動
// ---------------------------------------------------------------------
import { remote } from 'electron'

remote.globalShortcut.register('CommandOrControl+Shift+K', () => {
    remote.BrowserWindow.getFocusedWindow().webContents.openDevTools()
})

window.addEventListener('beforeunload', () => {
    remote.globalShortcut.unregisterAll()
})

// ---------------------------------------------------------------------
// 独自スクリプトの読み込み
// ---------------------------------------------------------------------
// jqueryの読み込み
window.jQuery = window.$ = require('jquery/dist/jquery.min.js')
window.jQuery = window.$ = require('jquery/dist/jquery.min.js')
// クリップボードコピー用jsの読み込み
import Clipboard from 'clipboard/dist/clipboard.js'
// bootstrapの読み込み
import 'tether/dist/js/tether.min'
import 'bootstrap/dist/js/bootstrap.min'
// font-awesomeの読み込み
require('font-awesome/css/font-awesome.css')
// scssの読み込み
import './main.scss'
// tablesorterの読み込み
import 'tablesorter/dist/js/jquery.tablesorter'

$('#hokoku-button').click(function () {
    setTimeout(function(){
        $("#hokoku-tb").tablesorter();
    }, 3000);
});

// ---------------------------------------------------------------------
// bootstrapのスクリプト読み込み
// ---------------------------------------------------------------------
// タブの制御
$('#caseTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});
// ---------------------------------------------------------------------
// デザイン用の独自jqueryスクリプト
// ---------------------------------------------------------------------
// bodyの色を動的に変換
$(document).on('click','.link-index, .link-db',function () {
    $('body').removeClass();
    $('body').addClass('bd-white');
});
$(document).on('click','.tab-kyu, .link-write',function () {
    $('body').removeClass();
    $('body').addClass('bd-blue');
});
$(document).on('click','.tab-ippan',function () {
    $('body').removeClass();
    $('body').addClass('bd-yellow');
});
$(document).on('click','.tab-tensou',function () {
    $('body').removeClass();
    $('body').addClass('bd-green');
});
$(document).on('click','.tab-cpa',function () {
    $('body').removeClass();
    $('body').addClass('bd-red');
});
$(document).on('click','.tab-kotsu',function () {
    $('body').removeClass();
    $('body').addClass('bd-purple');
});

// ---------------------------------------------------------------------
// クリップボードコピー
// ---------------------------------------------------------------------
$(function () {
    var clipboard = new Clipboard('.clip_copy_btn');
});

// ---------------------------------------------------------------------
// 右クリック表示
// ---------------------------------------------------------------------
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

var menu = new Menu();
menu.append(new MenuItem({
  label: 'コピー',
  accelerator: 'CmdOrCtrl+C',
  role: 'copy'
}));

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);
// ---------------------------------------------------------------------
// devtool表示
// ---------------------------------------------------------------------
document.addEventListener("keydown", function (e) {
if (e.which === 123) {
    require('remote').getCurrentWindow().toggleDevTools();
} else if (e.which === 116) {
    location.reload();
}
});
