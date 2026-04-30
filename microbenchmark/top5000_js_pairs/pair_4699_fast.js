const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_6 = {};
        var VAR_2 = [];
        var VAR_3 = [];
        for (var VAR_4 = -1; ++VAR_4 < 100; ) {
          VAR_1["key" + VAR_4] = "value" + VAR_4;
          VAR_1["key" + VAR_4] = VAR_4;
          VAR_2.push("key" + VAR_4);
          VAR_3.push("value" + VAR_4);
        }
        var VAR_5;
        VAR_5 = VAR_3[VAR_6.key5];
        VAR_5 = VAR_3[VAR_6.key25];
        VAR_5 = VAR_3[VAR_6.key75];
        VAR_5 = VAR_3[VAR_6.key99];
    }
};