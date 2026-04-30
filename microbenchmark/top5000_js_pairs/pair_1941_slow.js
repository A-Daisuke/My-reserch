const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = [];
          for (var VAR_4 = VAR_1; VAR_4 < VAR_2; ++VAR_4) {
            VAR_3.push(VAR_4);
          }
          return VAR_3;
        }
        var VAR_5 = FUNCTION_1(1, 9999);
        eval(VAR_5.join("+"));
    }
};