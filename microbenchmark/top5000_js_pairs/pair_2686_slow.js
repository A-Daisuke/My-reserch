const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_2(VAR_1);
        }
        for (let VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          FUNCTION_1(VAR_3, (VAR_4) => VAR_4 * 2);
        }
    }
};