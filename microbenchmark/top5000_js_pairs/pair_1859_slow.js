const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = [];
        var FUNCTION_1 = function (VAR_4) {
          this.VAR_5 = VAR_4;
        };
        for (var VAR_6 = 0; VAR_6 < VAR_1.length; VAR_6++) {
          VAR_3.push(new FUNCTION_1(VAR_1[VAR_2]));
        }
    }
};