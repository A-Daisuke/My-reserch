const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_6 = "";
          var VAR_7 = Array(VAR_1).join(" ");
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            var VAR_4 = Array(VAR_3 * 2 + 2).join("*");
            if (VAR_6 !== "") VAR_6 += "\n";
            VAR_6 += VAR_7 + VAR_4 + VAR_7;
            VAR_7 = VAR_7.slice(0, -1);
          }
          return VAR_6;
        }
        FUNCTION_1(100);
    }
};