const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.push(Math.random());
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_2 < 1000; VAR_2++) VAR_3.push(parseInt(100000 * Math.random()));
        function FUNCTION_1(VAR_5, VAR_6) {
          return VAR_5 < VAR_6;
        }
        VAR_3.slice(0).sort(FUNCTION_1);
    }
};