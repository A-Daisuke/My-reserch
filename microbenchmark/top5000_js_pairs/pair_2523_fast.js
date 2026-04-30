const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          return VAR_1 + VAR_2 + VAR_3;
        }
        function FUNCTION_2(VAR_4) {
          return VAR_4.KEY_4 + VAR_4.KEY_5 + VAR_4.KEY_6;
        }
        for (var VAR_6 = 0; VAR_6 < 1000; VAR_6++) {
          FUNCTION_2({
            KEY_4: VAR_6,
            KEY_5: VAR_6,
            KEY_6: VAR_6,
          });
        }
    }
};