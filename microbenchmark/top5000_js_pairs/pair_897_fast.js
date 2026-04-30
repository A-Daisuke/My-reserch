const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_3 = 0; VAR_3 <= 100000; VAR_3++) {
          VAR_1.push(VAR_3);
        }
        function FUNCTION_1(VAR_4) {
          return VAR_1.find(function (VAR_5) {
            return VAR_5 === VAR_4;
          });
        }
        FUNCTION_1(0);
    }
};