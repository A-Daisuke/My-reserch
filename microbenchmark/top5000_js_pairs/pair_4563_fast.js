const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_4,
            VAR_5 = [0, 1];
          for (VAR_4 = 2; VAR_4 <= VAR_1; VAR_4++) VAR_5.push(VAR_5[VAR_4 - 1] + VAR_5[VAR_4 - 2]);
          return VAR_5[VAR_1];
        }
        FUNCTION_1(300);
    }
};