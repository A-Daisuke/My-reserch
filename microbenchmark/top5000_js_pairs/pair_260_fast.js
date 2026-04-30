const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_4 = "";
        for (VAR_1 = 0; VAR_1 < 100000; ++VAR_1) {
          VAR_4 += "some rather long string";
        }
        var VAR_5 = VAR_4;
    }
};