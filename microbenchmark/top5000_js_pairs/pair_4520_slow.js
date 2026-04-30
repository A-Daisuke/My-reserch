const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1["" + VAR_2] = 1;
        }
        function FUNCTION_1(VAR_3) {
          return JSON.stringify(VAR_3) === "{}";
        }
        FUNCTION_1(VAR_1);
    }
};