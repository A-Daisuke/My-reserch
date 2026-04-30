const Benchmark = {
    run: function() {
        function FUNCTION_1(
          VAR_1,
          VAR_2,
          VAR_3,
          VAR_4,
        ) {
          this.VAR_5 = VAR_1;
          this.VAR_6 = VAR_2;
          this.VAR_7 = VAR_3;
          this.VAR_8 = VAR_4;
        }
        VAR_9 = 34;
        VAR_10 = 55;
        VAR_11 = 2;
        VAR_12 = 23;
        var VAR_13 = new FUNCTION_1(VAR_9, VAR_10, VAR_11, VAR_12);
        VAR_14 = VAR_13.VAR_5;
        VAR_15 = VAR_13.VAR_6;
        VAR_16 = VAR_13.VAR_7;
        VAR_17 = VAR_13.VAR_8;
    }
};