const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 25000; ++VAR_2) {
          VAR_1.push(Math.random());
        }
        function FUNCTION_1(VAR_3) {
          return VAR_3.indexOf(Math.min.apply(Math, VAR_3));
        }
        FUNCTION_1(VAR_1);
    }
};