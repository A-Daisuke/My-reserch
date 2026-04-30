const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          return VAR_3 === 0 ? VAR_1 : FUNCTION_1(VAR_2 + VAR_1, VAR_2, --VAR_3);
        }
        function FUNCTION_2(VAR_4, VAR_5, VAR_6) {
          return (
            Array.apply(null, Array(VAR_6))
              .map(function (VAR_7) {
                return VAR_5;
              })
              .join("") + VAR_4
          );
        }
        function FUNCTION_3(VAR_8, VAR_9, VAR_10) {
          var VAR_11 = "";
          for (var VAR_12 = 0; VAR_12 < VAR_10; VAR_12++) {
            VAR_11 += VAR_9;
          }
          return VAR_11 + VAR_8;
        }
        FUNCTION_2("a", "x", 1000);
    }
};