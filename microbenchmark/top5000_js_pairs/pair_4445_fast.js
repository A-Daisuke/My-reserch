const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1() {}
        var VAR_5 = VAR_1.VAR_5,
          VAR_7 = 0;
        for (var VAR_6 = 0; VAR_2 < VAR_5; VAR_2++) {
          VAR_7 += VAR_1[VAR_2];
        }
    }
};