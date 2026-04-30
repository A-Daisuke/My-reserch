const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push("1234567");
        }
        function FUNCTION_1(VAR_3) {
          var VAR_4 = [];
          for (var VAR_5 = 0; VAR_2 < VAR_3.length; ++VAR_2) {
            if (VAR_2 >= VAR_3.length % 3 && (VAR_3.length - VAR_2) % 3 == 0) {
              VAR_4.push(" ");
            }
            VAR_4.push(VAR_3[VAR_2]);
          }
          return VAR_4.join("");
        }
        for (var VAR_6 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          FUNCTION_1(VAR_1[VAR_2]);
        }
    }
};