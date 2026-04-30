const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        function FUNCTION_1(VAR_3, VAR_4) {
          if (VAR_3 <= 0) return [];
          var VAR_5 = [VAR_4];
          while (VAR_5.length < VAR_3 / 2) {
            VAR_5 = VAR_5.concat(VAR_5);
          }
          return VAR_5.concat(VAR_5.slice(0, VAR_3 - VAR_5.length));
        }
        var VAR_2 = FUNCTION_1(VAR_1, 0);
    }
};