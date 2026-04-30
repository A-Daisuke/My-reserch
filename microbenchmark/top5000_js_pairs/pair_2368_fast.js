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
          var VAR_3 = VAR_2.findIndex((VAR_5) => VAR_5 !== null);
          var VAR_4 = VAR_3 > -1 ? VAR_2.slice(VAR_3) : [];
          return VAR_4.reduceRight((VAR_6, VAR_7) => {
            if (VAR_6.length || VAR_7 !== null) {
              VAR_6.unshift(VAR_7);
            }
            return VAR_6;
          }, []);
        }
        FUNCTION_1(VAR_1);
    }
};