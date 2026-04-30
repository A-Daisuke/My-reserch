const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_4 = "foo";
          VAR_4 += "/";
          if (VAR_1 > 0) {
            VAR_4 += "bar";
            VAR_4 += "/";
          }
          VAR_4 += "baz";
          return VAR_4;
        }
        for (var VAR_3 = -1000; VAR_3 < 1000; ++VAR_3) {
          FUNCTION_1(VAR_3);
        }
    }
};