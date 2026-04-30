const Benchmark = {
    run: function() {
        var VAR_1 = "prefix",
          VAR_2 = "blablalbah";
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          var VAR_4 = VAR_1 + VAR_2.slice(0, 1).toUpperCase() + VAR_2.slice(1);
        }
    }
};