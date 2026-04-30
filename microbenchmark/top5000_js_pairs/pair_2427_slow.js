const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3;
        for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) VAR_2.unshift("a");
        VAR_1 = VAR_2.join("");
    }
};