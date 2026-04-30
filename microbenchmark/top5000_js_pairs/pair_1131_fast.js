const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 100000; VAR_1++) {
          var VAR_2 = VAR_1 * 2;
          var VAR_3 = VAR_1 * 3;
          var VAR_4 = VAR_2 - VAR_3 === "123456";
        }
    }
};