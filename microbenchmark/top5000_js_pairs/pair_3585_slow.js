const Benchmark = {
    run: function() {
        var VAR_1 = "testsearch";
        var VAR_2 = /test|search/;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2.test(VAR_1);
        }
    }
};