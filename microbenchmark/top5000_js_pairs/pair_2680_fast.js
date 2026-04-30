const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_4 = [],
          VAR_3 = [],
          VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_4.push("test string value");
        }
        VAR_4 = [];
    }
};