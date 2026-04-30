const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
          var VAR_2 = [0, 0, 0];
          VAR_2[0] = 1;
          VAR_2[1] = 2;
          VAR_2[2] = 3;
          VAR_2[0] = VAR_2[0] + VAR_2[1];
          VAR_2[1] = VAR_2[1] + VAR_2[2];
          VAR_2[2] = VAR_2[2] + VAR_2[0];
        }
    }
};