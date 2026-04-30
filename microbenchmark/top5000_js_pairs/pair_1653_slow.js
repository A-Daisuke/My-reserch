const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = [];
          for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
            VAR_1.push(Math.random());
          }
          return VAR_1;
        }
        var VAR_3 = FUNCTION_1();
        var VAR_4 = VAR_3.sort(function (VAR_5, VAR_6) {
          return VAR_5 < VAR_6;
        })[0];
    }
};