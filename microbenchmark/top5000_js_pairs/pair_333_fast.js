const Benchmark = {
    run: function() {
        var VAR_1 = (function (VAR_2) {
          for (var VAR_3 = [2], VAR_4 = 1, VAR_5 = 3; VAR_4 < VAR_2; VAR_5 += 2) {
            for (var VAR_6 = true, VAR_7 = 0; VAR_6 && VAR_7 < Math.ceil(Math.sqrt(VAR_4)); VAR_7++) {
              VAR_6 = VAR_5 % VAR_3[VAR_7] !== 0;
            }
            VAR_4 = VAR_6 ? VAR_3.push(VAR_5) : VAR_4;
          }
          return VAR_3;
        })(1900);
    }
};