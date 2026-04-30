const Benchmark = {
    run: function() {
        function* FUNCTION_1() {
          while (1) {
            VAR_1++;
            yield;
          }
        }
        var VAR_1 = 0,
          VAR_2 = FUNCTION_1();
        while (VAR_1 < 999) {
          VAR_2.next();
        }
        VAR_2.next();
    }
};