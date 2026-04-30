const Benchmark = {
    run: function() {
        var VAR_1 = [
          ...Array(1000).fill(null),
          ...Array(100).fill("foo"),
          ...Array(100).fill(null),
          ...Array(100).fill("bar"),
          ...Array(1000).fill(null),
        ];
        const FUNCTION_3 = (VAR_6) => !!VAR_6;
        function FUNCTION_1() {
          const VAR_7 = VAR_1.findIndex(FUNCTION_3);
          VAR_1.reverse();
          const VAR_8 = VAR_1.findIndex(FUNCTION_3);
          return VAR_1
            .reverse()
            .slice(VAR_7, VAR_1.length - VAR_8);
        }
        FUNCTION_1(VAR_1);
    }
};