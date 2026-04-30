const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return parseInt(VAR_1);
        }
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) FUNCTION_1(VAR_2 + 0.29802);
    }
};