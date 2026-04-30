const Benchmark = {
    run: function() {
        var VAR_4 = "";
        var VAR_2 = 0;
        for (; VAR_2 < 100000; VAR_2++) {
          VAR_4 += "abba";
        }
        var VAR_5 = VAR_4;
    }
};