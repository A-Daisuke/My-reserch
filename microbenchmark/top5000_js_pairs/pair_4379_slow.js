const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: 10,
          KEY_2: 20,
          KEY_3: 30,
          KEY_4: 40,
          KEY_5: 50,
        };
        var FUNCTION_1 = function (VAR_2, VAR_3, VAR_4, VAR_5, VAR_6) {
          this.KEY_1 = VAR_2;
          this.KEY_2 = VAR_3;
          this.KEY_3 = VAR_4;
          this.KEY_4 = VAR_5;
          this.KEY_5 = VAR_6;
        };
        var VAR_7 = new FUNCTION_1(10, 20, 30, 40, 50);
        VAR_7.KEY_1 += VAR_7.KEY_5;
        VAR_7.KEY_2 += VAR_7.KEY_4;
        VAR_7.KEY_3 += VAR_7.KEY_3;
        VAR_7.KEY_4 += VAR_7.KEY_2;
        VAR_7.KEY_5 += VAR_7.KEY_1;
    }
};