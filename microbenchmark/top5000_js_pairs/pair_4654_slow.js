const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = VAR_1 + "";
          while (VAR_3.length < VAR_2) {
            VAR_3 = "0" + VAR_3;
          }
          return VAR_3;
        }
        FUNCTION_1(1, 1024);
    }
};