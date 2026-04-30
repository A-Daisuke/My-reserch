const Benchmark = {
    run: function() {
        for (var VAR_1 = 0, VAR_2 = "", VAR_3 = "", VAR_4 = 0; VAR_1 < 10000; VAR_1++) {
          VAR_3 = "0" + VAR_1;
          VAR_4 = VAR_3.length;
          VAR_2 = VAR_3.substring(VAR_4 - 2, VAR_4);
        }
    }
};