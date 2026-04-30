const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4, VAR_5, VAR_6) {
          if (VAR_6 === 0) return VAR_4;
          VAR_4 = VAR_5 + VAR_4;
          return FUNCTION_2(VAR_4, VAR_5, --VAR_6);
        }
        function FUNCTION_3(VAR_7, VAR_8, VAR_9) {
          return (
            Array.apply(null, Array(VAR_9))
              .map(function (VAR_10) {
                return VAR_8;
              })
              .join("") + VAR_7
          );
        }
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          var VAR_11 = "";
          for (var VAR_12 = 0; VAR_12 < VAR_3; VAR_12++) {
            VAR_11 += VAR_2;
          }
          return VAR_11 + VAR_1;
        }
        FUNCTION_1("a", "x", 1000);
    }
};