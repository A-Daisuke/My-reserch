const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0, VAR_3 = 10000; VAR_2 < VAR_3; VAR_2++) {
          VAR_1 += VAR_2 + ",";
        }
        var VAR_4 = VAR_1.split(",");
    }
};