const Benchmark = {
    run: function() {
        var VAR_1 = "[";
        var VAR_2 = "[";
        var VAR_3 = "[";
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1 += VAR_4;
          VAR_1 += ",";
          VAR_2 += VAR_4 + 10000;
          VAR_2 += ",";
          VAR_3 += VAR_4 + 100000;
          VAR_3 += ",";
        }
        VAR_1 = VAR_1.slice(0, -1);
        VAR_2 = VAR_2.slice(0, -1);
        VAR_3 = VAR_3.slice(0, -1);
        VAR_1 += "]";
        VAR_2 += "]";
        VAR_3 += "]";
        eval(VAR_1);
    }
};