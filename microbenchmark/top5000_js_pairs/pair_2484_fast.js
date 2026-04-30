const Benchmark = {
    run: function() {
        for (var VAR_2 = 0; VAR_2 < 9999; VAR_2++) {
          (function test() {
            var VAR_1 = 0;
            VAR_1++;
            VAR_1++;
            VAR_1--;
          })();
        }
    }
};