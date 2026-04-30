const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 == 0) return 1;
          else return VAR_1 * FUNCTION_1(VAR_1, VAR_2 - 1);
        }
        for (var VAR_3 = 0; VAR_3 <= 10000; VAR_3++) {
          FUNCTION_1(VAR_3, 2);
        }
    }
};