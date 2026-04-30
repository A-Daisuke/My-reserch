const Benchmark = {
    run: function() {
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.concat("foo" + VAR_3);
        }
    }
};