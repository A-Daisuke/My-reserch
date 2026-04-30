const Benchmark = {
    run: function() {
        var VAR_1 = [10, 20, 30, 40, 50];
        var FUNCTION_1 = function (VAR_2, VAR_3, VAR_4, VAR_5, VAR_6) {
          this.VAR_7 = VAR_2;
          this.VAR_8 = VAR_3;
          this.VAR_9 = VAR_4;
          this.VAR_10 = VAR_5;
          this.VAR_11 = VAR_6;
        };
        var VAR_12 = new FUNCTION_1(10, 20, 30, 40, 50);
        VAR_12.VAR_7 += VAR_12.VAR_11;
        VAR_12.VAR_8 += VAR_12.VAR_10;
        VAR_12.VAR_9 += VAR_12.VAR_9;
        VAR_12.VAR_10 += VAR_12.VAR_8;
        VAR_12.VAR_11 += VAR_12.VAR_7;
    }
};