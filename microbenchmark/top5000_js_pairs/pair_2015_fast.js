const Benchmark = {
    run: function() {
        for (VAR_1 = 2000; VAR_1 < 3001; VAR_1++) {
          !(VAR_1 % 4 != 0 || (VAR_1 % 100 == 0 && VAR_1 % 400 != 0));
        }
    }
};