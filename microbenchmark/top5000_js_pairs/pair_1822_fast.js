const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        function FUNCTION_1(VAR_2, VAR_3) {
          return VAR_2 + VAR_3;
        }
        var VAR_6 = 0;
        for (var VAR_7 = 0; VAR_7 < VAR_1; ++VAR_7) {
          VAR_6 = VAR_6 + VAR_7;
        }
        console.log(VAR_6);
    }
};