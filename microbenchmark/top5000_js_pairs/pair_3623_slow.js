const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3, VAR_4, VAR_5, VAR_6, VAR_7) {
          this.VAR_8 = VAR_1;
          this.VAR_9 = VAR_2;
          this.VAR_10 = VAR_3;
          this.VAR_11 = VAR_4;
          this.VAR_12 = VAR_5;
          this.VAR_13 = VAR_6;
          this.VAR_14 = VAR_7;
        }
        var VAR_15 = [],
          VAR_16 = 100;
        while (VAR_16--) {
          VAR_15.push(new FUNCTION_1(1, 2, 3, 4, 5, 6, Math.random()));
        }
    }
};