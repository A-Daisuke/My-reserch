const Benchmark = {
    run: function() {
        var VAR_1 = "qwertyuiop",
          VAR_2;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2 = VAR_1.replace(VAR_1[0], VAR_1[0].toUpperCase());
        }
    }
};