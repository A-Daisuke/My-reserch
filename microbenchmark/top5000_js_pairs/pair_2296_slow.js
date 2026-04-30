const Benchmark = {
    run: function() {
        var VAR_1 = " test foo bar     ";
        for (var VAR_2 = 1000; VAR_2--; ) {
          VAR_1.replace(new RegExp("^s+|s+$", "g"), "");
        }
    }
};