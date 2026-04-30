const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 99999; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1(VAR_3) {
          return function t() {
            var VAR_4 = VAR_3.apply(this, arguments);
            while (typeof VAR_4 == "function") VAR_4 = VAR_4();
            return VAR_4;
          };
        }
        VAR_1.slice().pop();
    }
};