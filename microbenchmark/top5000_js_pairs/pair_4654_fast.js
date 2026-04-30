const Benchmark = {
    run: function() {
        var VAR_4 = "0";
        function FUNCTION_1(VAR_1, VAR_2) {
          while (VAR_2 > VAR_4.length) {
            VAR_4 += VAR_4;
          }
          var VAR_3 = VAR_1 + "";
          return VAR_4.substr(0, VAR_2 - VAR_3.length) + VAR_3;
        }
        FUNCTION_1(1, 1024);
    }
};