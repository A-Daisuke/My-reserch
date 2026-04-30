const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3];
        while (VAR_1.length < 1000) {
          VAR_1.push.apply(VAR_1, VAR_1);
        }
        function FUNCTION_1(VAR_2) {
          return VAR_2 + 1;
        }
        var VAR_3 = VAR_1.map(FUNCTION_1);
    }
};