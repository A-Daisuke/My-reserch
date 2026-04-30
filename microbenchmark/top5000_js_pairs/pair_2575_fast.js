const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4) {
          return VAR_4 + 1;
        }
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 = FUNCTION_2(VAR_1);
        }
        console.log(VAR_1);
    }
};