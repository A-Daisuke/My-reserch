const Benchmark = {
    run: function() {
        var VAR_1 = [
          ...Array(1000).fill(null),
          ...Array(100).fill("foo"),
          ...Array(100).fill(null),
          ...Array(100).fill("bar"),
          ...Array(1000).fill(null),
        ];
        function FUNCTION_2(VAR_5) {
          let VAR_3 = VAR_5.findIndex(Boolean);
          let VAR_4 = VAR_5.length - Array.from(VAR_5).reverse().findIndex(Boolean);
          return VAR_5.slice(VAR_3, VAR_4);
        }
        FUNCTION_2(VAR_1);
    }
};