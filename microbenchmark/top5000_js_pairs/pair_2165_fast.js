const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push("1234567");
        }
        function FUNCTION_2(VAR_7) {
          var VAR_8 = [];
          for (var VAR_5 = 0; VAR_2 < VAR_7.length; ++VAR_2) {
            if (VAR_2 >= VAR_7.length % 3 && (VAR_7.length - VAR_2) % 3 == 0) {
              VAR_8.push(" ");
            }
            VAR_8.push(VAR_7[VAR_2]);
          }
          return VAR_8.join("");
        }
        for (var VAR_6 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          FUNCTION_2(VAR_1[VAR_2]);
        }
    }
};