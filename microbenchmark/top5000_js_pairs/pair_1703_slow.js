const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 250; VAR_1++) {
          var VAR_2 = new Date().getTime();
          var VAR_3 = new Date(VAR_2).toString();
        }
    }
};