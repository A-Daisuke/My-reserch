const Benchmark = {
    run: function() {
        FUNCTION_1 = function (VAR_1) {
          var VAR_2,
            VAR_3 = [0, 1];
          for (VAR_2 = 0; VAR_2 < VAR_1; ++VAR_2) VAR_3.push(VAR_3[0] + VAR_3[1]), VAR_3.shift();
          return VAR_3[0];
        };
        FUNCTION_1(1000);
    }
};