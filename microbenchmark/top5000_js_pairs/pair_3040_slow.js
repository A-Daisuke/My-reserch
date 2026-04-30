const Benchmark = {
    run: function() {
        var VAR_1;
        function FUNCTION_1(VAR_2, VAR_3) {
          if (VAR_3 === 0) return 1;
          else return VAR_2 * FUNCTION_1(VAR_2, VAR_3 - 1);
        }
        for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          FUNCTION_1(5, 5);
        }
    }
};