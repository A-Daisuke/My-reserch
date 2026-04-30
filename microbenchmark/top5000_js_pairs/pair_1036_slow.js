const Benchmark = {
    run: function() {
        var VAR_1 = [
          ...Array.from(Array(1000).keys()),
          ...Array.from(Array(1000).keys()),
        ];
        function FUNCTION_1(VAR_2) {
          const VAR_3 = [];
          VAR_2.forEach((VAR_4) => {
            if (VAR_3.indexOf(VAR_4) === -1) VAR_3.push(VAR_4);
          });
          return VAR_3;
        }
        FUNCTION_1(VAR_1);
    }
};