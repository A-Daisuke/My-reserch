const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = [];
          for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
            VAR_3.push(VAR_2);
          }
          return VAR_3.join("");
        }
        console.log(FUNCTION_1(1000, "eric"));
    }
};