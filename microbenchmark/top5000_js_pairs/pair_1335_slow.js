const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return [VAR_1].reduce(function (VAR_2, VAR_3) {
            return VAR_2 + VAR_1 + VAR_3;
          }, 0);
        }
        for (var VAR_4 = 0, VAR_5 = 0; VAR_4 < 1000000; VAR_4++) VAR_5 += FUNCTION_1(VAR_4);
    }
};