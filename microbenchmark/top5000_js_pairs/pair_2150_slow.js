const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return "x";
        }
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(FUNCTION_1());
        }
        var VAR_3 = VAR_1.join("");
    }
};