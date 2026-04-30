const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            if (VAR_3 > 1) {
              VAR_2.push(VAR_2[VAR_3 - 2] + VAR_2[VAR_3 - 1]);
            } else if (VAR_3 === 1) {
              VAR_2.push(1);
            } else {
              VAR_2.push(0);
            }
          }
          return VAR_2;
        }
        FUNCTION_1(10);
    }
};