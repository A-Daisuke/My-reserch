const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) VAR_1.push(VAR_3);
        for (var VAR_4 = 0; VAR_4 < 15; VAR_4++) VAR_2.push(VAR_4);
        function FUNCTION_1(VAR_5) {}
        for (var VAR_10 = 0, VAR_11 = VAR_1.length; VAR_3 < VAR_11; VAR_3++) {
          var VAR_12 = VAR_1[VAR_3];
          FUNCTION_1(VAR_12);
        }
    }
};