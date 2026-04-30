const Benchmark = {
    run: function() {
        var VAR_1 = "test.log",
          VAR_2;
        for (var VAR_3 = 1; VAR_3 <= 100; VAR_3++) {
          VAR_2 = VAR_1 + "." + VAR_3;
          VAR_2.substr(VAR_2.lastIndexOf("."), VAR_2.length);
        }
    }
};