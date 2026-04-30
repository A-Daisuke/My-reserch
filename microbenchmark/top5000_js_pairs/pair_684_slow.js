const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          VAR_1.push(VAR_2 % 391);
        }
        function FUNCTION_1(VAR_3) {
          console.log(VAR_3);
        }
        function FUNCTION_2(VAR_4) {
          return VAR_4.filter(function (VAR_5, VAR_6, VAR_7) {
            return VAR_7.indexOf(VAR_5) === VAR_2;
          });
        }
        FUNCTION_1(FUNCTION_2(VAR_1));
    }
};