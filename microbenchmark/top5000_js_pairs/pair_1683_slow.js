const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 <= 999; VAR_1++) {
          new Date("2013-01-01T12:15:55." + VAR_1 + "Z");
        }
    }
};