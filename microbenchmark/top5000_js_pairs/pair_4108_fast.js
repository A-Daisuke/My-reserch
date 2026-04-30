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
          let VAR_8 = null;
          let VAR_9 = null;
          for (let VAR_10 = 0; VAR_10 < VAR_2.length; VAR_10++) {
            if (VAR_8 === null && VAR_2[VAR_10]) {
              VAR_8 = VAR_10;
            }
            if (VAR_2[VAR_10]) {
              VAR_9 = VAR_10 + 1;
            }
          }
          return VAR_2.slice(VAR_8, VAR_9);
        }
        FUNCTION_1(VAR_1);
    }
};