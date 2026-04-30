const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
          this.VAR_5 = undefined;
          this.VAR_6 = undefined;
        }
        function FUNCTION_2(VAR_7, VAR_8) {
          var VAR_9 = new FUNCTION_1(VAR_7, VAR_8);
          switch (VAR_9.VAR_4) {
            case 0:
              VAR_9.VAR_4 = 1;
              VAR_9.VAR_6 = VAR_9.VAR_3 + 1;
            case 1:
              VAR_9.VAR_4 = 2;
              VAR_9.VAR_3 = VAR_9.VAR_6;
            case 2:
              VAR_9.VAR_4 = 3;
              VAR_9.VAR_5 = VAR_9.VAR_3 + 1;
          }
          return VAR_9.VAR_5;
        }
        var VAR_10 = FUNCTION_2(1, 0);
    }
};