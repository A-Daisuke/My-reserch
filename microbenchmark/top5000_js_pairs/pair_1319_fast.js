const Benchmark = {
    run: function() {
        var VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_5.push({
            KEY_1: "" + Math.random(),
            KEY_2: Math.random(),
          });
        }
    }
};