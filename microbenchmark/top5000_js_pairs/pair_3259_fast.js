const Benchmark = {
    run: function() {
        var VAR_1 = "";
        var VAR_2 = 295075130;
        var VAR_3 = VAR_2 + 1000;
        for (VAR_2; VAR_2 < VAR_3; VAR_2++) {
          VAR_1 += VAR_2 + "\n";
        }
    }
};