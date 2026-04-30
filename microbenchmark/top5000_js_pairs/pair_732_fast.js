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
          let VAR_6 = null;
          let VAR_7 = null;
          for (let VAR_8 = 0; VAR_8 < VAR_2.length; VAR_8++) {
            if (VAR_6 === null && VAR_2[VAR_8]) {
              VAR_6 = VAR_8;
            }
            if (VAR_2[VAR_8]) {
              VAR_7 = VAR_8 + 1;
            }
          }
          return VAR_2.slice(VAR_6, VAR_7);
        }
        FUNCTION_1(VAR_1);
    }
};