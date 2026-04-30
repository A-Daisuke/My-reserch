const Benchmark = {
    run: function() {
        var VAR_1 = 10000,
          VAR_2 = [];
        for (VAR_1; VAR_1 > 0; VAR_1--) {
          VAR_2.push(Math.random());
        }
        function FUNCTION_1(VAR_3) {
          return VAR_3.reduce(function (VAR_4, VAR_5) {
            return VAR_4 + VAR_5;
          }, 0);
        }
        FUNCTION_1(VAR_2);
    }
};