const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 9999; VAR_1++) {
          (function test() {
            var VAR_2 = 0;
            VAR_2++;
            VAR_2++;
            VAR_2--;
          })();
        }
    }
};