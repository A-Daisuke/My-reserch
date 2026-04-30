const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        function FUNCTION_1(VAR_2) {
          this.FUNCTION_2 = function () {
            var VAR_3 = VAR_1.splice(0, 1);
            VAR_1.push(VAR_3);
            return VAR_3[0];
          };
        }
        var VAR_4 = new FUNCTION_1(VAR_1);
        for (var VAR_5 = 0; VAR_5 < 10000; VAR_5++) {
          VAR_4.FUNCTION_2();
        }
    }
};