const Benchmark = {
    run: function() {
        for (var VAR_3 = 0; VAR_3 < 9999; VAR_3++) {
          (function test() {
            var VAR_1 = 0;
            VAR_1++;
            VAR_1++;
            VAR_1--;
          })();
        }
    }
};