const Benchmark = {
    run: function() {
        var VAR_4 = {};
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1["" + VAR_2] = 1;
        }
        function FUNCTION_1(VAR_3) {
          for (var VAR_5 in VAR_3) return false;
          return true;
        }
        FUNCTION_1(VAR_4);
    }
};