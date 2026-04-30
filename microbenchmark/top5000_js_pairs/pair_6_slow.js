const Benchmark = {
    run: function() {
        var VAR_1 = "hello ";
        var VAR_2 = "world";
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1 = [VAR_1, VAR_2].join("");
        }
    }
};