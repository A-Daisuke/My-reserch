const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1000; VAR_2--; ) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1(VAR_3) {
          return VAR_3 * VAR_3;
        }
        VAR_1.forEach(function (VAR_5) {
          return VAR_5 * VAR_5;
        });
    }
};