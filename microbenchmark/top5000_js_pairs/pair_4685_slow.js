const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3 = [];
        for (var VAR_4 = 0, VAR_5 = true; VAR_4 < 1000; VAR_4++) {
          if (VAR_5) {
            VAR_2.push(VAR_4);
          } else {
            VAR_1.push(VAR_4);
          }
          VAR_3.push(VAR_4);
          VAR_5 = !VAR_5;
        }
        function FUNCTION_1() {
          return VAR_1;
        }
        function FUNCTION_2() {
          return VAR_3.filter(function (VAR_6) {
            return VAR_6 % 2 === 0;
          });
        }
        function FUNCTION_3() {
          return VAR_3.filter(function (VAR_7) {
            return VAR_7 % 2 !== 0;
          });
        }
        FUNCTION_2();
        FUNCTION_3();
        FUNCTION_1();
    }
};