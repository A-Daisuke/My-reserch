const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1() {
          var VAR_3;
          VAR_3 = VAR_1[VAR_1.length - 1];
          return VAR_3;
        }
        function FUNCTION_2() {
          var VAR_4,
            VAR_5,
            VAR_6,
            VAR_7 = [].slice;
          (VAR_5 =
            2 <= VAR_1.length
              ? VAR_7.call(VAR_1, 0, (VAR_6 = VAR_1.length - 1))
              : ((VAR_6 = 0), [])),
            (VAR_4 = VAR_1[VAR_6++]);
          return VAR_4;
        }
        var VAR_8 = FUNCTION_2(VAR_1);
    }
};