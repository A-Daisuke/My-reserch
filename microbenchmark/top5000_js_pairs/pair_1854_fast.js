const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = new Map();
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1["sampleKey" + VAR_3] = 123;
          VAR_2.set("sampleKey" + VAR_3, 123);
        }
        VAR_2.clear();
    }
};