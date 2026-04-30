const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000).fill(0).map((VAR_2, VAR_3) => VAR_3);
        function FUNCTION_1(VAR_4) {
          return VAR_4 % 2 === 0;
        }
        for (var VAR_5 in VAR_1) {
          FUNCTION_1(VAR_1[VAR_5]);
        }
    }
};