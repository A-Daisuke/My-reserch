const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000).fill(9);
        VAR_1[50000] = 3;
        function FUNCTION_1(VAR_2) {
          return Math.min.apply(null, VAR_2);
        }
        FUNCTION_1(VAR_1);
    }
};