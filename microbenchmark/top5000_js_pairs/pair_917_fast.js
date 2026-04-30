const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        function FUNCTION_1(VAR_2, VAR_3) {
          if (VAR_2 <= 0) return [];
          var VAR_4 = [VAR_3];
          while (VAR_4.length < VAR_2 / 2) {
            VAR_4 = VAR_4.concat(VAR_4);
          }
          return VAR_4.concat(VAR_4.slice(0, VAR_2 - VAR_4.length));
        }
        var VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < VAR_1; VAR_6++) VAR_5.push(0);
    }
};