const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000);
        function FUNCTION_1() {
          return 2 + 2;
        }
        for (var VAR_2 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          2 + 2;
        }
    }
};