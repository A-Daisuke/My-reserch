const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(Math.random() * 500 - 1000 + "");
        }
        var VAR_3 = "";
        for (var VAR_4 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_3 += VAR_1[VAR_2] + "";
        }
    }
};