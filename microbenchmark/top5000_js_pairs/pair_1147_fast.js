const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          FUNCTION_1.prototype.FUNCTION_2 = function () {
            return VAR_1;
          };
        }
        var VAR_3 = [];
        for (VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_3.push(new FUNCTION_1(VAR_4).FUNCTION_2());
        }
    }
};