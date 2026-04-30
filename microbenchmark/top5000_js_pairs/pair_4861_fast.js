const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Array(VAR_1)
            .fill()
            .map(function () {
              return Math.random();
            });
        }
        var VAR_2 = FUNCTION_1(100);
        var VAR_3 = FUNCTION_1(100);
        var VAR_4;
        VAR_4 = VAR_2.concat(VAR_3);
    }
};