const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000000; ++VAR_2) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1(VAR_6, VAR_7, VAR_8) {
          VAR_9 = VAR_7;
        }
        VAR_1.forEach(FUNCTION_1);
    }
};