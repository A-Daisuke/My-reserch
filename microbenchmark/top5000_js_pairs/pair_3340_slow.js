const Benchmark = {
    run: function() {
        VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1["v" + VAR_2] = true;
        }
        VAR_3 = [];
        for (var VAR_4 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_3.push("v" + VAR_2);
        }
        for (var VAR_5 = 0; VAR_5 < 2000; VAR_5++) {
          VAR_1["v" + VAR_5];
        }
    }
};