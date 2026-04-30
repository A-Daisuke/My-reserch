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
          let VAR_6 = VAR_2.findIndex(Boolean);
          let VAR_7 = VAR_2.length - Array.from(VAR_2).reverse().findIndex(Boolean);
          return VAR_2.slice(VAR_6, VAR_7);
        }
        FUNCTION_1(VAR_1);
    }
};