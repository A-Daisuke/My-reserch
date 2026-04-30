const Benchmark = {
    run: function() {
        var VAR_1;
        VAR_1 = new (function () {
          this.VAR_2 = 0;
          (this.VAR_3 = 0),
            (this.FUNCTION_1 = function FUNCTION_1(VAR_4) {
              VAR_1.VAR_2 = VAR_4;
            }),
            (this.FUNCTION_2 = function FUNCTION_2(VAR_5) {
              return VAR_1.VAR_2;
            });
        })();
    }
};