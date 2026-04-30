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
          var FUNCTION_2 = (VAR_3, VAR_4) => {
            let VAR_5;
            if (VAR_4 === null && VAR_3.length == 0) {
              VAR_5 = [];
            } else {
              VAR_5 = [...VAR_3, VAR_4];
            }
            return VAR_5;
          };
          return VAR_2
            .reduce(FUNCTION_2, [])
            .reverse()
            .reduce(FUNCTION_2, [])
            .reverse();
        }
        FUNCTION_1(VAR_1);
    }
};