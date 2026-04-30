const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = [];
        for (VAR_1 = 1; VAR_1 <= 10000; VAR_1++) {
          VAR_2.push("index_" + VAR_1);
        }
        var VAR_3 = VAR_2.indexOf("index_1000");
    }
};