const Benchmark = {
    run: function() {
        var VAR_1 = ["hello", "yellow", "tooth", "tootth"];
        for (var VAR_2 = 0, VAR_3 = VAR_1.length; VAR_2 < VAR_3; VAR_2++) {
          FUNCTION_1(VAR_1[VAR_2]);
        }
        function FUNCTION_1(VAR_4) {
          for (var VAR_9 = 0, VAR_10 = VAR_4.length; VAR_9 < VAR_10; VAR_9++) {
            var VAR_11 = VAR_4[VAR_9];
            if (VAR_4.indexOf(VAR_11) === VAR_9 && VAR_4.indexOf(VAR_11, VAR_9 + 1) == -1)
              return VAR_11;
          }
          return null;
        }
    }
};