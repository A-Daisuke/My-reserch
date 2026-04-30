const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = [];
          while (VAR_2--) {
            VAR_3.push(VAR_1);
          }
          return VAR_3.join("");
        }
        var VAR_4 = FUNCTION_1("a", 100000);
    }
};