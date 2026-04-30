const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) VAR_1.push(VAR_3);
        for (var VAR_4 = 0; VAR_4 < 15; VAR_4++) VAR_2.push(VAR_4);
        function FUNCTION_1(VAR_5) {}
        var VAR_6 = VAR_1.slice(0),
          VAR_7;
        while ((VAR_7 = VAR_6.shift()) !== undefined) {
          var VAR_8 = VAR_2.slice(0),
            VAR_9;
          FUNCTION_1(VAR_7);
        }
    }
};