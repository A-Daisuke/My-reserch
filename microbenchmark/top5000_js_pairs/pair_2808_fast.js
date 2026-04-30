const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          var VAR_4 = " ".FUNCTION_2(VAR_1 - 1);
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2.push(VAR_4 + "*".FUNCTION_2(VAR_3 * 2 + 1) + VAR_4);
            VAR_4 = VAR_4.slice(0, -1);
          }
          return VAR_2.join("\n");
        }
        String.prototype.FUNCTION_2 = function (VAR_5) {
          return new Array(VAR_5 + 1).join(this);
        };
        FUNCTION_1(100);
    }
};