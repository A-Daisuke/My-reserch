const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2 = 0) {
          if (VAR_1 % 1 === 0) return VAR_1;
          let VAR_3 = VAR_1 < 0 ? -1 : 1;
          while (VAR_2-- > 0) VAR_3 *= 10;
          return Math.round((VAR_1 + 0.5 * Number.EPSILON * VAR_1) * VAR_3) / VAR_3;
        }
        var VAR_4 = [];
        var VAR_5 = 10000;
        while (VAR_5--) VAR_4.push((Math.random() * 10000) / 3);
        var VAR_6 = 3;
        var VAR_7 = 10000;
        while (VAR_7--) FUNCTION_1(VAR_4[VAR_7], VAR_6);
    }
};