const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000);
        function FUNCTION_1() {
          return 2 + 2;
        }
        VAR_1.forEach(FUNCTION_1);
    }
};