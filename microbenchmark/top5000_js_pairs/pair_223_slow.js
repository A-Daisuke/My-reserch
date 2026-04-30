const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          for (var VAR_3 = 0; VAR_3 < VAR_2; ++VAR_3) VAR_1 = VAR_1 + VAR_3;
          return VAR_1;
        }
        FUNCTION_1(0, 10000000);
    }
};