const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          for (var VAR_3 = 1; VAR_3 <= VAR_1; VAR_3++) {
            var VAR_5 = " ".FUNCTION_2(VAR_1 - VAR_3);
            VAR_2.push(VAR_5 + "*".FUNCTION_2((VAR_3 - 1) * 2 + 1) + VAR_5);
          }
          return VAR_2.join("\n");
        }
        String.prototype.FUNCTION_2 = function (VAR_4) {
          return new Array(VAR_4 + 1).join(this);
        };
        FUNCTION_1(100);
    }
};