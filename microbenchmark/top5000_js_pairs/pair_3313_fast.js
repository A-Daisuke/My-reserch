const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: "val" + VAR_2,
          });
        }
        function FUNCTION_1(VAR_3) {}
        if (Array.prototype.forEach) {
          VAR_1.forEach(function (VAR_5, VAR_6, VAR_7) {
            FUNCTION_1(VAR_5);
          });
        } else {
          var VAR_8 = VAR_1.length;
          for (var VAR_9 = 0; VAR_2 < VAR_8; VAR_2++) {
            var VAR_10 = VAR_1[VAR_2];
            FUNCTION_1(VAR_10);
          }
        }
    }
};