const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1 += "abc" + "d" + "e" + "fgh";
        }
        VAR_1 = VAR_1;
    }
};