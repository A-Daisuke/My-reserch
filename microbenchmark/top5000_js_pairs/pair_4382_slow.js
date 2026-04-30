const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          let VAR_2 = [];
          for (let VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2 = VAR_2.concat(VAR_3 + 2);
          }
          return VAR_2;
        }
        FUNCTION_1(20);
    }
};