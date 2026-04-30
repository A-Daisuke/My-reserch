const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
          var VAR_2 = Math.random() * 1000000;
          var VAR_5 = Math.sin(VAR_2);
        }
    }
};