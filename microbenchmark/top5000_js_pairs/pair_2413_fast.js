const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = "";
          for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
            VAR_3 = VAR_3 + VAR_1;
          }
          return VAR_3;
        }
        function FUNCTION_2(VAR_5, VAR_6) {
          var VAR_7 = VAR_5;
          while (VAR_3.length < VAR_6) {
            VAR_7 = VAR_7 + VAR_7;
          }
          return VAR_3.substr(0, VAR_6);
        }
        function FUNCTION_3(VAR_8, VAR_9) {
          var VAR_10 = Array(VAR_9);
          while (VAR_9--) {
            VAR_10[VAR_11] = VAR_8;
          }
          return VAR_10.join("");
        }
        FUNCTION_1("c", 5000);
    }
};