const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 10000; ++VAR_3) {
          VAR_1 = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15".split(",");
          VAR_2 += VAR_1.length;
        }
    }
};