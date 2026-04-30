const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_3 = 0;
        var VAR_4 = 0;
        while (VAR_4 < VAR_1) {
          ++VAR_3;
          ++VAR_4;
        }
    }
};