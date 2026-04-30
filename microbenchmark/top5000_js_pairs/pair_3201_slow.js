const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000);
        var FUNCTION_1 = function (VAR_2) {
          this.VAR_3 = VAR_2;
        };
        var VAR_4 = VAR_1.length,
          VAR_5 = [],
          VAR_6;
        for (VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
          VAR_5.push(new FUNCTION_1(VAR_1[VAR_6]));
        }
    }
};