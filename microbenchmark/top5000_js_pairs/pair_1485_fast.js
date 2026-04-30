const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        function FUNCTION_1(VAR_4, VAR_5) {
          if (VAR_4 <= 0) return [];
          var VAR_6 = [VAR_5];
          while (VAR_6.length < VAR_4 / 2) {
            VAR_6 = VAR_6.concat(VAR_6);
          }
          return VAR_6.concat(VAR_6.slice(0, VAR_4 - VAR_6.length));
        }
        var VAR_2 = FUNCTION_1(VAR_1, 0);
    }
};