const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        };
        var VAR_5 = { KEY_1: new FUNCTION_1(0, 0) };
        var VAR_6 = {
          KEY_2: [0, 0],
        };
        var VAR_7 = 0,
          VAR_8 = 0,
          VAR_9 = 1;
        VAR_5.KEY_1.VAR_3 = Math.random();
        VAR_7 = VAR_5.KEY_1.VAR_3;
        VAR_5.KEY_1.VAR_4 = Math.random();
        VAR_7 = VAR_5.KEY_1.VAR_4;
    }
};