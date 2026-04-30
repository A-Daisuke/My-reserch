const Benchmark = {
    run: function() {
        var VAR_1 = "testsearch";
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.indexOf("search");
          VAR_1.indexOf("test");
        }
    }
};