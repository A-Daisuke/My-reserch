const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1000; VAR_2--; ) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1(VAR_4) {
          return VAR_4 * VAR_4;
        }
        VAR_1.forEach(FUNCTION_1);
    }
};