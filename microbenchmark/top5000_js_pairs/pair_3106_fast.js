const Benchmark = {
    run: function() {
        var VAR_4 = "a" + "b" + "c";
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_4 += "d" + "e" + "f";
        }
        var VAR_5 = VAR_4;
    }
};