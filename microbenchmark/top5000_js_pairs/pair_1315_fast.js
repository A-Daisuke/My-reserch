const Benchmark = {
    run: function() {
        var VAR_1 = 331,
          VAR_2 = 432,
          VAR_3 = 102;
        for (var VAR_5 = 0; VAR_5 < 10000; VAR_5++) {
          var VAR_6 = "x";
          VAR_6 += "," + VAR_2;
        }
    }
};