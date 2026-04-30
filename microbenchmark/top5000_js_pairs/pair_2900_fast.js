const Benchmark = {
    run: function() {
        var VAR_3 = "";
        var VAR_4 = "TEST";
        var VAR_5 = "PLUS";
        var VAR_6 = "EQUALS";
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_3 += VAR_4;
          VAR_3 += VAR_5;
          VAR_3 += VAR_6;
        }
    }
};