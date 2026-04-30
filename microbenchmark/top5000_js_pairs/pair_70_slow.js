const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000);
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push("test test test test test test test test" + VAR_2);
        }
        var VAR_3 = VAR_1.join("");
    }
};