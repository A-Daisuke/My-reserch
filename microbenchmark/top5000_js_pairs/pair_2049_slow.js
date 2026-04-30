const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        function FUNCTION_1() {
          VAR_1.push(VAR_2);
          VAR_2++;
          if (VAR_2 < 10000) {
            return FUNCTION_1();
          }
        }
        FUNCTION_1();
    }
};