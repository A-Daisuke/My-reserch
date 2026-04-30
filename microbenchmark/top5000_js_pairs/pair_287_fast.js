const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1(VAR_5, VAR_6) {
          if (!VAR_1.length) return;
          for (var VAR_7 = 0, VAR_8 = VAR_1.length; VAR_2 < VAR_8; VAR_2++) {
            VAR_6(VAR_2);
          }
        }
        FUNCTION_1(VAR_1, function (VAR_9) {
          var VAR_4 = VAR_1[VAR_2];
        });
    }
};