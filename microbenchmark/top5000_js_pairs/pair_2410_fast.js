const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = "";
          var VAR_4 = " ".FUNCTION_2(VAR_1 - 1);
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            var VAR_6 = Array(VAR_3 * 2 + 2).join("*");
            if (VAR_2 !== "") VAR_2 += "\n";
            VAR_2 += VAR_4 + VAR_6 + VAR_4;
            VAR_4 = VAR_4.slice(0, -1);
          }
          return VAR_2;
        }
        String.prototype.FUNCTION_2 = function (VAR_5) {
          return new Array(VAR_5 + 1).join(this);
        };
        FUNCTION_1(100);
    }
};