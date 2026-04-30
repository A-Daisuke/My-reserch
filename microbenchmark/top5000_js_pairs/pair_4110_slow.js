const Benchmark = {
    run: function() {
        var VAR_1 = [1, 10, 100, 1000, 10000];
        function FUNCTION_1(VAR_2) {
          for (var VAR_3 = -1 * VAR_2; VAR_3 <= VAR_2; VAR_3++);
        }
        VAR_1.forEach(FUNCTION_1);
    }
};