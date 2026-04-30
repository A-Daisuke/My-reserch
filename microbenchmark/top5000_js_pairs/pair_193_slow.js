const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000).fill(0).map((VAR_2, VAR_3) => VAR_3);
        function FUNCTION_1(VAR_4) {
          return (VAR_5) => (VAR_4 % 2 !== 0 ? 0 : VAR_4 / 4 + 1);
        }
        VAR_1.map(FUNCTION_1);
    }
};