const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000 + 1).join("0").split("").map(parseFloat);
        function FUNCTION_1(VAR_5, VAR_6, VAR_7) {
          var VAR_8 = VAR_5.length;
          var VAR_9 = VAR_7;
          if (!VAR_5.length) return VAR_7;
          for (var VAR_10 = 0; VAR_10 < VAR_8; VAR_10++) {
            VAR_9 = VAR_6(VAR_9, VAR_5[VAR_10], VAR_10, VAR_5);
          }
          return VAR_9;
        }
        FUNCTION_1(
          VAR_1,
          function (VAR_3, VAR_4) {
            return VAR_3 + VAR_4;
          },
          0,
        );
    }
};