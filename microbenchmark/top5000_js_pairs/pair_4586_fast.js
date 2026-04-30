const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return { KEY_1: VAR_1 };
        }
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100; ++VAR_3) VAR_2.push(FUNCTION_1(Array(10).join(VAR_3.toString())));
        var VAR_4;
        for (var VAR_6 = 0; VAR_3 < VAR_2.length; ++VAR_3) VAR_4 += VAR_2[VAR_3].KEY_1;
    }
};