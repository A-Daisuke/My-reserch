const Benchmark = {
    run: function() {
        var VAR_1 = [
          ...Array(1000).fill(null),
          ...Array(100).fill("foo"),
          ...Array(100).fill(null),
          ...Array(100).fill("bar"),
          ...Array(1000).fill(null),
        ];
        function FUNCTION_1(VAR_2) {
          let VAR_5 = null;
          let VAR_6 = null;
          for (let VAR_7 = 0; VAR_7 < VAR_2.length; VAR_7++) {
            if (VAR_5 === null && VAR_2[VAR_7]) {
              VAR_5 = VAR_7;
            }
            if (VAR_2[VAR_7]) {
              VAR_6 = VAR_7 + 1;
            }
          }
          return VAR_2.slice(VAR_5, VAR_6);
        }
        FUNCTION_1(VAR_1);
    }
};