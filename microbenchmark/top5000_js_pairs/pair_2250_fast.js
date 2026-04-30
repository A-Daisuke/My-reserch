const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = ".";
        var VAR_4;
        for (VAR_5 = 0; VAR_5 < VAR_1; VAR_5++) {
          VAR_4 = "aaa" + VAR_2 + "bbb" + VAR_2 + "ccc";
        }
    }
};