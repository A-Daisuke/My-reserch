const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000).fill(0).map((VAR_2, VAR_3) => VAR_3);
        function FUNCTION_1(VAR_4) {
          return VAR_4 % 2 === 0;
        }
        VAR_1.forEach(function (VAR_6) {
          FUNCTION_1(VAR_6);
        });
    }
};