const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3;
          for (VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3 += 1) {
            VAR_2(VAR_1[VAR_3]);
          }
        }
        var VAR_4 = [];
        (function () {
          var VAR_5;
          for (VAR_5 = 0; VAR_5 < 100; VAR_5 += 1) {
            VAR_4.push(VAR_5);
          }
        })();
        var VAR_6 = [];
        FUNCTION_1(VAR_4, function (VAR_7) {
          FUNCTION_1(VAR_4, function (VAR_8) {
            VAR_6.push({
              KEY_1: VAR_7,
              KEY_2: VAR_8,
            });
          });
        });
        console.log(VAR_6);
    }
};