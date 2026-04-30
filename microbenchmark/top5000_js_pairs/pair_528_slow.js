const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          for (var VAR_3 = 0; VAR_3 < VAR_1[0]; ++VAR_3) {
            VAR_2.push(VAR_1.length == 1 ? 0 : FUNCTION_1(VAR_1.slice(1)));
          }
          return VAR_2;
        }
        var VAR_4 = FUNCTION_1([300, 400]);
        var VAR_5 = JSON.parse(JSON.stringify(VAR_4));
    }
};