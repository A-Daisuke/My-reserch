const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 123456; VAR_2++) {
          VAR_1 += "[null,1],";
        }
        VAR_1 += "[null]";
        var VAR_3 = '{"snapshot":[' + VAR_1 + "]}";
        var VAR_4 = eval("(" + VAR_3 + ")");
    }
};