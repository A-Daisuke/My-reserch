const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          console.log(VAR_1 * VAR_1);
          eval("");
        }
    }
};