const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {}
        for (var VAR_3 = 0, VAR_4 = 1000; VAR_3 < VAR_4; VAR_3++) {
          for (var VAR_5 = 0, VAR_6 = 1000; VAR_5 < VAR_6; VAR_5++) {
            FUNCTION_1([VAR_3, VAR_5, (1 + -1) ^ (VAR_3 - 2 + VAR_5)]);
          }
        }
    }
};