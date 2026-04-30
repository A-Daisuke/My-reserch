const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_5 = "";
          var VAR_6 = " ".FUNCTION_2(VAR_1 - 1);
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            var VAR_7 = Array(VAR_3 * 2 + 2).join("*");
            if (VAR_5 !== "") VAR_5 += "\n";
            VAR_5 += VAR_6 + VAR_7 + VAR_6;
            VAR_6 = VAR_6.slice(0, -1);
          }
          return VAR_5;
        }
        String.prototype.FUNCTION_2 = function (VAR_4) {
          return new Array(VAR_4 + 1).join(this);
        };
        FUNCTION_1(100);
    }
};