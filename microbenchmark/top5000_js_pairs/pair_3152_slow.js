const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        function FUNCTION_1(VAR_3, VAR_4) {
          VAR_5 = VAR_3;
        }
        VAR_1.forEach(FUNCTION_1);
    }
};