const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = 0,
          VAR_3 = [];
        for (VAR_2; VAR_2 < VAR_1; VAR_2++) {
          VAR_3.push("line");
        }
    }
};