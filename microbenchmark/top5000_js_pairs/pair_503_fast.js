const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3;
        for (VAR_3 = 0; VAR_3 < 10000; ++VAR_3) {
          VAR_1.push(VAR_3);
          VAR_2.push(VAR_3.toString());
        }
        var VAR_4 = 100;
        var VAR_5 = 0;
        for (VAR_3 = 0; VAR_3 < VAR_4; ++VAR_3) {
          VAR_5 += VAR_1.indexOf(9999);
        }
    }
};