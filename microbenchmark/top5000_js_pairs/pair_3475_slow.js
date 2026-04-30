const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push(1);
        }
        VAR_2 = 0;
        function FUNCTION_1(VAR_4) {
          VAR_2 += VAR_4;
        }
        VAR_1.map(FUNCTION_1);
    }
};