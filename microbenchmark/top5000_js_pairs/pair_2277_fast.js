const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 = "testString_" + VAR_2;
          VAR_1.substring(0, VAR_1.indexOf(":"));
        }
    }
};