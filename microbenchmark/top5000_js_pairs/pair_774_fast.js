const Benchmark = {
    run: function() {
        var VAR_4 = "";
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 20000; VAR_2++) {
          VAR_4 += "a" + VAR_2;
        }
        var VAR_5 = VAR_4;
    }
};