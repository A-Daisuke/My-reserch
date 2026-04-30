const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1 < 2 ? VAR_1 : FUNCTION_1(VAR_1 - 1) + FUNCTION_1(VAR_1 - 2);
        }
        function FUNCTION_2(VAR_2) {
          for (
            VAR_3 = 2, VAR_4 = [1, 1];
            VAR_3 < VAR_2;
            VAR_3++, VAR_4[VAR_4.VAR_5] = VAR_4[VAR_4.VAR_5 - 1] + VAR_4[VAR_4.VAR_5 - 2]
          ) {}
          return VAR_4[VAR_4.VAR_5 - 1];
        }
        FUNCTION_1(20);
    }
};