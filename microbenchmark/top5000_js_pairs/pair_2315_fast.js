const Benchmark = {
    run: function() {
        var VAR_1 = " test foo bar     ";
        var VAR_3 = new RegExp("^s+|s+$", "g");
        for (var VAR_2 = 1000; VAR_2--; ) {
          VAR_1.replace(VAR_3, "");
        }
    }
};