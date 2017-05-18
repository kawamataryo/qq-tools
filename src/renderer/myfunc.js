var sentence = {
    // ------------------------------------------------------------
    //呼吸脈拍と主訴の文章作成
    // ------------------------------------------------------------
    createHRS: function(rr,hr,syuso){
        if(syuso == "" || syuso == "無し" || syuso == "無") {
            // 主訴無し
            if(rr == "正常" && hr == "正常") {
                var result = "呼吸と脈拍は正常であった。";
            }else if(rr == "正常") {
                var result = "呼吸は正常だが" + hr + "であった。";
            }else if(hr == "正常") {
                var result = "脈拍は正常だが" + rr + "であった。";
            }else {
                var result = rr + "及び" + hr + "であった。";
            }
        }else {
            // 主訴あり
            if(rr == "正常" && hr == "正常") {
                var result = "呼吸と脈拍は正常だが，" + syuso + "を訴えていた。";
            }else if(rr == "正常") {
                var result = "呼吸は正常だが" + hr + "であり，" + syuso + "を訴えていた。";
            }else if(hr == "正常") {
                var result = "脈拍は正常だが" + rr + "であり，" + syuso + "を訴えていた。";
            }else {
                var result = rr + "及び" + hr + "であり，" + syuso + "を訴えていた。";
            }
        }
        return result;
    },
    // ------------------------------------------------------------
    // バイタル、身体所見の文章作成
    // ------------------------------------------------------------
    createVB: function(vital,body){
        var result = "";
        // バイタル追加
        for(var i = 0; i < vital.length; i++) {
            if(i != vital.length - 1) {
                result += vital[i] + "，";
            }else {
                result += vital[i];
            }
        }
        // 身体所見追加
        if(body.length != 0) {
            result += "の測定及び"
            for(var i = 0; i < body.length; i++) {
                if(i != body.length - 1) {
                    result += body[i] + "，";
                }else {
                    result += body[i];
                }
            }
        }else {
            result += "の測定"
        }
        return result
    },
    // ------------------------------------------------------------
    // 酸素投与ありの場合のバイタル測定、身体所見
    // ------------------------------------------------------------
    createVBandO: function(vital,body,oxgen,oxnum){
        var result = "";
        // バイタル追加
        for(var i = 0; i < vital.length; i++) {
            if(i != vital.length - 1) {
                result += vital[i] + "，";
            }else {
                result += vital[i];
            }
        }
        // 身体所見追加
        if(body.length != 0) {
            result += "の測定及び";
            for(var i = 0; i < body.length; i++) {
                if(i != body.length - 1) {
                    result += body[i] + "，";
                }else {
                    result += body[i].replace("の","を") + "し，";
                }
            }
            result += oxgen + "にて酸素" + oxnum + "投与";
        }else {
            result += "を測定し，" + oxgen + "にて酸素" + oxnum + "投与";
        }
        return result
    },
    // ------------------------------------------------------------
    // 保温の文章作成
    // ------------------------------------------------------------
    createHEAT: function (heat) {
        var result = "";
        if(heat == "なし") {
            result = ""
        }else {
            result = "毛布による保温と"
        }
        return result
    },
    // ------------------------------------------------------------
    // 創傷の文章作成
    // ------------------------------------------------------------
    createCARE: function (damageposi, scratchIn, cm, careIn) {
        var result = "";
        // 創傷あり
        if(scratchIn != "なし") {
            // 変形の場合の文章切り替え
            if(scratchIn == "変形") {
                // 処置あり
                if(careIn != "なし") {
                    result = "をする。観察の結果から" + damageposi + "に" + scratchIn + "がみられたため，" + careIn + "を行う。"
                }else {
                    // 処置なし
                    result = "を行う。観察の結果から" + damageposi + "に" + scratchIn + "がみられた。"
                }
            }else {
                // 変形以外
                // 処置あり
                if(careIn != "なし") {
                    result = "をする。観察の結果から" + damageposi + "に約" + cm + "の" + scratchIn + "がみられたため，" + careIn + "を行う。"
                }else {
                    // 処置なし
                    result = "を行う。観察の結果から" + damageposi + "に約" + cm + "の" + scratchIn + "がみられた。"
                }
            }
        }
        return result;
    },
    // ------------------------------------------------------------
    // 転院の同乗者の文章作成
    // ------------------------------------------------------------
    createRIDE: function (ride) {
        var result = "";
        if(ride == "なし") {
            result = ""
        }else {
            result = ride + "同乗のもと"
        }
        return result
    },
};
module.exports = sentence;
