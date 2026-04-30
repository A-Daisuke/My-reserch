const Benchmark = {
    run: function() {
        var VAR_1 = "2014-06-06 23:45:00";
        for (var VAR_2 = 1000; VAR_2--; ) {
          var VAR_3 = FUNCTION_1(VAR_1);
        }
        function FUNCTION_1(VAR_4) {
          return new Date(VAR_4.replace(/-/g, "/"));
        }
    }
};