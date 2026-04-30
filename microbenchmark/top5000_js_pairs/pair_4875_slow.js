const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = 0;
        };
        var VAR_2 = new FUNCTION_1();
        var VAR_3 = { KEY_1: 0 };
        var VAR_4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var VAR_5;
        for (VAR_2.VAR_1 = VAR_4.length - 1; VAR_2.VAR_1 > -1; VAR_2.VAR_1--) {
          VAR_5 = VAR_4[VAR_2.VAR_1];
        }
    }
};