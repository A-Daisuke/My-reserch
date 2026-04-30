const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 1000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) VAR_1.push(VAR_3);
        function FUNCTION_1(VAR_4) {}
        var VAR_8 = 0;
        for (; VAR_3 < VAR_2; VAR_3++) {
          var VAR_7 = VAR_1[VAR_3];
          FUNCTION_1(VAR_7);
        }
    }
};