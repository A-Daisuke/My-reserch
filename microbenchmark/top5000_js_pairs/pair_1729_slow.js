const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 25000; ++VAR_2) {
          VAR_1.push(Math.random());
        }
        function FUNCTION_1(VAR_3) {
          return VAR_3.reduce(function (VAR_4, VAR_5, VAR_6) {
            return VAR_5 < VAR_3[VAR_4] ? VAR_6 : VAR_4;
          }, 0);
        }
        FUNCTION_1(VAR_1);
    }
};