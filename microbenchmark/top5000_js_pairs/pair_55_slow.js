const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var VAR_3 = [];
        var VAR_4 = new String();
        VAR_1[0] = VAR_2[0] = VAR_3[0] = "coco";
        VAR_1[0].VAR_5 = VAR_2[0].VAR_6 = "cocodef";
        VAR_1[300] = VAR_2[600000] = VAR_3[1] = "coca";
        VAR_1[300].VAR_7 = VAR_2[600000].VAR_8 = "cocadef";
        VAR_2.forEach(function (VAR_9) {
          VAR_4 += "<li> " + VAR_9.VAR_5 + "</li>";
        });
    }
};