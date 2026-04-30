const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1(VAR_6, VAR_7) {
          if (!VAR_1.length) return;
          for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_2 < VAR_4; VAR_2++) {
            VAR_7(VAR_1[VAR_2], VAR_2);
          }
        }
        FUNCTION_1(VAR_1, function (VAR_8, VAR_9) {});
    }
};