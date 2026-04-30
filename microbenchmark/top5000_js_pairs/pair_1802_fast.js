const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        function FUNCTION_1(VAR_2, VAR_3) {
          return VAR_2 + VAR_3;
        }
        var VAR_4 = 0;
        for (var VAR_5 = 0; VAR_5 < VAR_1; ++VAR_5) {
          VAR_4 = FUNCTION_1(VAR_4, VAR_5);
        }
        console.log(VAR_4);
    }
};