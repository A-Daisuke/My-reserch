const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_4 = 1,
            VAR_5 = 0,
            VAR_6 = VAR_5,
            VAR_7 = VAR_4;
          for (; VAR_7++ <= VAR_1; VAR_5 = VAR_6 = VAR_4 + (VAR_4 = VAR_5));
          return VAR_5;
        }
        FUNCTION_1(300);
    }
};