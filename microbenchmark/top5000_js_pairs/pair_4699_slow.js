const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = [];
        var VAR_3 = [];
        for (var VAR_4 = -1; ++VAR_4 < 100; ) {
          VAR_1["key" + VAR_4] = "value" + VAR_4;
          VAR_1["key" + VAR_4] = VAR_4;
          VAR_2.push("key" + VAR_4);
          VAR_3.push("value" + VAR_4);
        }
        var VAR_5;
        VAR_5 = VAR_3[VAR_2.indexOf("key5")];
        VAR_5 = VAR_3[VAR_2.indexOf("key25")];
        VAR_5 = VAR_3[VAR_2.indexOf("key75")];
        VAR_5 = VAR_3[VAR_2.indexOf("key99")];
    }
};