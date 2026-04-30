const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3 = [],
          VAR_4 = [],
          VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_4.push({
            KEY_1: 5,
            KEY_2: "string value",
          });
        }
        VAR_4 = [];
    }
};