const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push("foo" + VAR_3);
        }
        var VAR_4 = VAR_1.join();
    }
};