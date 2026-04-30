const Benchmark = {
    run: function() {
        var VAR_1, VAR_2;
        function* FUNCTION_1() {
          var VAR_3 = 1;
          while (VAR_3 < 100000) yield VAR_3++;
        }
        for (VAR_1 of FUNCTION_1()) {
          VAR_2 = VAR_1;
        }
    }
};